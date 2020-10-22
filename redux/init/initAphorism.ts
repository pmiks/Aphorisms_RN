import {IAphorism, IAphorismState, IAphorismType} from "../interface";

export const initState:IAphorismState= {
connected:false,
    aphorism: [{
    id: -1,
    text: "Тестовый",
    obscene: true,
    author: "Автор",
    creator_user: "",
    created: "",
    hashtags: "",
    photo_path: "",
    published: false,
    theme: "",
    type: 0
}],

aphorismType: [{
    id_type: 0,
    typename: "Афоризм дня",
    order: 0,
    category: true
}]
}