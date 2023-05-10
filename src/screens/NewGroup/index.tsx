import { Alert } from 'react-native';
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useTheme } from "styled-components/native";
import { Container, Content, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

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
            if (error instanceof AppError) {
                Alert.alert('Novo Grupo', error.message);
            } else {
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo, tente novamente mais tarde');
                console.log(error);
            }
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