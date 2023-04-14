import { FlatList } from 'react-native';
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Form, HeaderList, NumbersOfPlayer } from "./styles";
import { Filter } from "@components/Filter";
import { useState } from 'react';
import { PlayerCard } from '@components/PlayerCard';

export function Players() {

    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState(['Vinicius']);

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

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumbersOfPlayer>{players.length}</NumbersOfPlayer>
            </HeaderList>
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}
                    />
                )}
            />
        </Container>
    );
}