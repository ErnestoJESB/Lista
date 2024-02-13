<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const name: Ref<string> = ref('')
const apellido: Ref<string> = ref('')
const edad: Ref<number> = ref(0)
const genero: Ref<string> = ref('Selecciona uno')
const genre: Ref<string[]> = ref(['Selecciona uno', 'Masculino', 'Femenino', 'Otro'])
const selectedGenero: Ref<string> = ref('')
const otroGenero: Ref<string> = ref('')
const errors: Ref<{ name: string }[]> = ref([])
const errorApe: Ref<{ apellido: string }[]> = ref([])
const errorEdad: Ref<{ edad: string }[]> = ref([])
const errorGenero: Ref<{ genero: string }[]> = ref([])



/* Realizar un formulario donde se valide lo siguiente:
 nombre -> Validar mínimo 5 caracteres máximo 18
 Apellido -> Validar que no sea igual al nombre
 edad -> Validar que sea mayor a 0 y menor a 60
  Genero -> Masculino y femenino, otro -> al seleccionar otro, se debe mostrar un input para ingresar el genero
*/


const handleGeneroChange = () => {
    selectedGenero.value = genero.value
}

const validation = () => {
    errors.value = []
    errorApe.value = []
    errorEdad.value = []
    errorGenero.value = []

    if (edad.value < 0 || edad.value > 60) {
        errorEdad.value.push({ edad: 'Edad no permitida' })
    }
    if ((name.value.length < 5) || (name.value.length > 18 || name.value === '')) {
        errors.value.push({ name: 'Error de nombre' })
    }
    if (name.value === apellido.value) {
        errorApe.value.push({ apellido: 'No puedes poner tu nombre en el apellido' })
    }
    if (selectedGenero.value === 'Selecciona uno') {
        errorGenero.value.push({ genero: 'Selecciona un genero' })
    }
    if (selectedGenero.value === 'Otro' && otroGenero.value === '') {
        errorGenero.value.push({ genero: 'Ingresa un genero' })
    }
    if (selectedGenero.value === 'Otro' && otroGenero.value.length < 5) {
        errorGenero.value.push({ genero: 'Genero no permitido' })
    }
    if (selectedGenero.value === 'Otro' && otroGenero.value.length > 18) {
        errorGenero.value.push({ genero: 'Genero no permitido' })
    }
    if (selectedGenero.value === 'Otro' && otroGenero.value === genero.value) {
        errorGenero.value.push({ genero: 'Genero no permitido' })
    }
}


</script>

<template>
    <!--  <main>
        <h3>Nombre</h3>
        <div>
            <input @input="validation" v-model="name" type="text" placeholder="Escribe tu nombre">
        </div>
        <span v-for="(err, index) in errors" :key="index">{{ err.name }}</span>
        <span></span>
        <h3>Apellido</h3>
        <div>
            <input @input="validation" v-model="apellido" type="text" placeholder="Escribe tu apellido">
        </div>
        <span v-for="(err, index) in errorApe" :key="index">{{ err.apellido }}</span>
        <h3>Edad</h3>
        <div>
            <input @input="validation" v-model="edad" type="number" placeholder="Escribe tu edad">
        </div>
        <span v-for="(err, index) in errorEdad" :key="index">{{ err.edad }}</span>
        <h3>Genero</h3>
        <div>
            <select @change="handleGeneroChange" v-model="genero">
                <option v-for="(gen, index) in genre" :key="index">{{ gen }}</option>
            </select>
        </div>
        <div v-if="selectedGenero === 'Otro'">
            <input @input="validation" v-model="otroGenero" type="text">
            <span v-for="(err, index) in errorGenero" :key="index">{{ err.genero }}</span>
        </div>
    </main> -->


    <form class="px-7 h-screen grid justify-center items-center">
        <div class="grid gap-6" id="form">
            <div class="w-full flex gap-3">
                <input @input="validation" v-model="name" type="text" placeholder="Escribe el nombre"
                    class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
                    id="nombre" name="nombre">
                <span v-for="(err, index) in errors" :key="index">{{ err.name }}</span>
                <input @input="validation" v-model="apellido" type="text" placeholder="Escribe la descripcion"
                    class="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                    id="descripcion" name="descripcion">
            </div>
            <div class="grid gap-6 w-full">
                <input
                    class="p-3 shadow-2xl   glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]"
                    type="date">
                <!-- <input
                    class="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
                    type="Email" placeholder="Email" id="Email" name="email"> -->
            </div>
            <!-- <div class="flex gap-3">
                <input
                    class="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                    type="password" placeholder="Password" id="password" name="password" >
                <input
                    class="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                    type="password" placeholder="Confirm password" required="">
            </div> -->
            <button
                class="outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold"
                type="submit">Submit</button>
        </div>
    </form>
</template>

<style scoped@>
main {
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
}

h3 {
    margin-top: 20px;
}

input,
select {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

span {
    color: red;
    display: block;
    margin-bottom: 5px;
}

.error {
    color: red;
    margin-top: 5px;
}
</style>