import Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    return knex("points_items").del().then(() => {
        return knex("table_name").insert([
            { title: "Lâmpadas", image: "lampada.svg" },
            { title: "Baterias", image: "baterias.svg" },
            { title: "Papeis", image: "papeis.svg" },
            { title: "Resíduos Eletrônicos", image: "eletronicos.svg" },
            { title: "Resíduos Orgânicos", image: "organicos.svg" },
            { title: "óleo de Cozinha", image: "oleo.svg" }
        ]);
    });
};
