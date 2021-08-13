<template>
  <div class="home">
    <header>
<h1>Vue nutre
    </h1>
    </header>
    
    <article v-for="item in nutri" :key="item.id" class="post">
      <strong class="titulo">{{item.titulo}}</strong>
      <img :src="item.capa" alt="">
      <span class="categorias">categoria dieta: {{item.categoria}}</span>
      <p class="subtitle">{{item.subtitulo}}</p>
      <a class="botton" href="">acessar</a>
    </article>
  </div>
</template>

<script>
import api from "@/services/api";
export default {
  name: 'Home',
  data(){
    return{
      nutri: []
    }
  },
  async created(){
    const response = await api.get('?api=posts'); 
    console.log(response.data);
    this.nutri = response.data;
  }
}
</script>


<style  scoped>
.home{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 35px;
  height: 60px;
  background: rgb(83, 83, 83);
  color: #fff;
}

.post{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  background: #ddd;
  border-radius: 7px;
  margin: 8px;
  padding: 10px;
}
.titulo{
  font-size: 25px;
  margin-bottom: 25px;
  margin-top: 10px;
}
img{
  width: 100%;
  height: 450px;
}
.categorias{
  padding-top: 15px;
  font-weight: bold;

}
.botton{
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #303030;
  color: #303030;
  text-decoration: none;
  border-radius: 4px;
}
.botton:hover{
  background: #303030;
  color: #fff;
}
</style>