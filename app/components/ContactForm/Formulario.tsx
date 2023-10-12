"use client"
import { InputCamp, SelectInput, ButtonSubmit } from "../utils/Inputs";
import { useForm } from "react-hook-form"; 

export default function Formulario () {
    const  { register, handleSubmit} = useForm()

    const sendForm = (data: any) => {
        console.log(data)
    }

    const options = [
        { value: 'Landing pages', children: 'Landing pages' },
        { value: 'Sites institucionais', children: 'Sites institucionais' },
        { value: 'E-commerce', children: 'E-commerce' },
    ];

    return(
        <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit(sendForm)}>
            <InputCamp 
                type="text" 
                id="nome"
                name="Nome:"
                register={register}
            />
            <InputCamp 
                type="email" 
                id="email"
                name="E-mail:"
                register={register}
            /> 
            <InputCamp 
                type="tel"
                id="tel"
                name="Whatsapp:"
                register={register}
            />
            <SelectInput 
                id={"services"} 
                options={options}
                name="Qual serviço:"
                register={register}
            />
            <ButtonSubmit name="Enviar formulário" />
        </form>
    )
}