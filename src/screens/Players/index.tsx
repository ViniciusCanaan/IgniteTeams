import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Form } from "./styles";
import { Filter } from "@components/Filter";

export function Players() {
    return (
        <Container>
            <Header showBackButton />
            <HighLight
                title="Nome da turma"
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                    placeholderTextColor='grey'
                />
                <ButtonIcon icon="add" />
            </Form>
            <Filter title="Time A" isActive/>

        </Container>
    );
}