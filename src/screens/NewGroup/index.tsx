import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useTheme } from "styled-components/native";
import { Container, Content, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {

    const [group, setGroup] = useState('');

    const { COLORS } = useTheme();
    const navigation = useNavigation();

    async function handleNew() {
        try {
            await groupCreate(group)
            navigation.navigate('players', { group: group });
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <HighLight title="Nova turma" subtitle="Crie a turma para adicionar as pessoas" />
                <Input
                    placeholder="Nome da turma"
                    placeholderTextColor={COLORS.GRAY_300}
                    onChangeText={setGroup}
                />
                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    );

}