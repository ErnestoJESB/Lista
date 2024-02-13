<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const name: Ref<string> = ref('')
const descripcion: Ref<string> = ref('')
const equipo: Ref<string> = ref('')
const nacionalidad: Ref<string> = ref('')
const nacionalidadSeleccionada: Ref<string> = ref('')
const otroNacionalidad: Ref<string> = ref('')
const errors: Ref<{ name: string }[]> = ref([])
const fechaNac: Ref<Date> = ref(new Date())






/* Realizar un formulario donde se valide lo siguiente:
 nombre -> Validar mínimo 5 caracteres máximo 18
 Apellido -> Validar que no sea igual al nombre
 edad -> Validar que sea mayor a 0 y menor a 60
  Genero -> Masculino y femenino, otro -> al seleccionar otro, se debe mostrar un input para ingresar el genero
*/

/* const handleSubmit = () => {
    validation()
    if (errors.value.length === 0 && errorApe.value.length === 0 && errorEdad.value.length === 0 && errorGenero.value.length === 0) {
        data.value = [name.value, apellido.value, edad.value, selectedGenero.value]
    }
} */


const handleNacionalidadChange = () => {
    nacionalidadSeleccionada.value = nacionalidad.value
}

const validation = () => {
    errors.value = []

}

interface FormData {
    id: number;
    nombre: string;
    descripcion: string;
    fechaNac: Date;
    equipo: string;
    nacionalidad: string;
}

const data: Ref<FormData[]> = ref([]);

const handleSubmit = () => {
    const formData: FormData = {
        id: data.value.length,
        nombre: name.value,
        descripcion: descripcion.value,
        fechaNac: fechaNac.value,
        equipo: equipo.value,
        nacionalidad: nacionalidad.value,
    };

    data.value.push(formData);
    clicked();
}

const emits = defineEmits(['Data']);
const clicked = () => {
    emits('Data', data.value);
};

const nationalities: string[] = [
    'Mexicana',
    'Brasileña',
    'Canadiense',
    'Estadounidense',
    'Española',
    'Inglesa',
    'Alemana',
    'Otro'
];

</script>

<template>
    <div class="card" :style="{ width: '100%' }">
        <div class="card-inner">

            <div class="px-7 h-screen grid justify-center items-center">
                <h1>Formulario de futbolistas</h1>
                <div class="grid gap-6" id="form">
                    <div class="w-full flex gap-3">
                        <input v-model="name" type="text" placeholder="Escribe el nombre"
                            class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
                            id="nombre" name="nombre">
                        <span v-for="(err, index) in errors" :key="index">{{ err.name }}</span>
                        <input v-model="descripcion" type="text" placeholder="Escribe la descripcion"
                            class="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                            id="descripcion" name="descripcion">
                    </div>
                    <div class="grid gap-6 w-full">
                        <input v-model="fechaNac" type="date"
                            class="p-3 shadow-2xl   glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]">
                        <input
                            class="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
                            v-model="equipo" type="text" placeholder="Escribe el nombre del equipo" name="equipo">
                    </div>
                    <div class="flex gap-3">
                        <!-- crea un select con la nacionalidades -->
                        <select @change="handleNacionalidadChange" v-model="nacionalidad" class="p-3 shadow
                            glass w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5]">
                            <option value="Selecciona una nacionalidad">Selecciona una nacionalidad</option>
                            <option v-for="(nationality, index) in nationalities" :key="index">{{ nationality }}</option>
                        </select>
                        <div v-if="nacionalidadSeleccionada === 'Otro'">
                            <input @input="validation" v-model="otroNacionalidad" type="text">
                        </div>
                    </div>
                    <button @click="handleSubmit" class="button">Guardar jugador</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped@>
.card {
    --bg: #e8e8e8;
    --contrast: #e2e0e0;
    --grey: #93a1a1;
    position: relative;
    padding: 9px;
    background-color: var(--bg);
    border-radius: 35px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.card-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-conic-gradient(var(--bg) 0.0000001%, var(--grey) 0.000104%) 60% 60%/600% 600%;
    filter: opacity(10%) contrast(105%);
}

.card-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 450px;
    background-color: var(--contrast);
    border-radius: 30px;
    /* Content style */
    font-weight: 900;
    color: #2c9caf;
    text-align: center;
    font-family: monospace;
}

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

.button {
    padding: 1em 2em;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    color: #2c9caf;
    transition: all 1000ms;
    font-size: 15px;
    position: relative;
    overflow: hidden;
    outline: 2px solid #2c9caf;
}

button:hover {
    color: #ffffff;
    transform: scale(1.1);
    outline: 2px solid #70bdca;
    box-shadow: 4px 5px 17px -4px #268391;
}

button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #2c9caf;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
}

button:hover::before {
    width: 250%;
}
</style>