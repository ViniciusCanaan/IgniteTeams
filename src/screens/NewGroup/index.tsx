import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <HighLight title="Nova turma" subtitle="Crie a turma para adicionar as pessoas" />
                <Button title="Criar" />
            </Content>
        </Container>
    );

}