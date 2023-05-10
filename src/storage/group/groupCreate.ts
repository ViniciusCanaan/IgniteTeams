import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroupName: string) {
    try {

        const storageGroups = await groupsGetAll();

        const groupAlreadyExists = storageGroups.includes(newGroupName);

        const groupCaracterInvalido = newGroupName.includes('#' && '$' && '@' && '*' && '^');

        const groupVazio = newGroupName.trim().length === 0;

        if(groupAlreadyExists){
            throw new AppError('Já existe um grupo com cadastrado com esse nome');
        }

        if(groupCaracterInvalido){
            throw new AppError('Proíbido caractere especial');
        }

        if(groupVazio){
            throw new AppError('Informe o nome da turma');
        }



        const storage = JSON.stringify([...storageGroups, newGroupName]);
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    } catch (error) {
        throw error;
    }

}