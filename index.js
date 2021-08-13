const mongoose = require("mongoose")
const articleModel = require("./article")

mongoose.connect("mongodb://localhost:27017/aprendendoMongo",{useNewUrlParser: true, useUnifiedTopology: true})

const Article = mongoose.model("Article",articleModel)


//Editando
/*Article.findByIdAndUpdate("6116538c29a51e1a4461d360", {
title:"Boku no Hero", 
author: "Kohei",
body:"Orumaito! SMASHH!!!!"
}).then(()=>{
    console.log("Update!")
}).catch(err =>{
    console.log(err)
})*/





Article.find({}).then(articles => {
    console.log(articles)
}).catch(err => {
    console.log(err)
})





//Deletando
/*Article.findByIdAndDelete("611655d937750b0ed4b20cc4").then(()=>{
    console.log("Dado removido!")
}).catch(err => {
    console.log(err)
})*/



//pesquisar um Registro
/*Article.findOne({'resume.content': 'Geraldão pega Yennifer'}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
})*/



//Pesquisa aninhada
/*Article.find({'resume.content': 'Geraldão pega Yennifer'}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
})*/


// Selecionando mais de um campo
/*Article.find({'author': 'CD projekt', 'body': 'Muito Bom'}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
})*/




// Selecionando por outro campo
/*Article.find({'author': 'CD projekt'}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
})*/



// Selecionando pelo id
/*Article.find({'_id': '611656b99a33192268ca89d0'}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
})*/




// Pegar todas as coleções
/*Article.find({}).then(articles => {
    console.log(articles)
}).catch(err => {
    console.log(err)
})*/





// Cadastro
/*const artigo = new Article({title: "Tokyo revenger", 
author: "No sei",
body: "Takemitchy",
special: true,
resume:{
    content: "Voltar",
    author: "Mickey"
}
})

artigo.save().then(() => {
    console.log("Artigo salvo!")
}).catch(err => {
    console.log(err)
})*/

