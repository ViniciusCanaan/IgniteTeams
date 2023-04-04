import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useTheme } from "styled-components/native";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
    const {COLORS} = useTheme();
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <HighLight title="Nova turma" subtitle="Crie a turma para adicionar as pessoas" />
                <Input
                    placeholder="Nome da turma"
                    placeholderTextColor={COLORS.GRAY_300}
                />
                <Button 
                title="Criar" 
                style={{marginTop:20}}
                />
            </Content>
        </Container>
    );

}