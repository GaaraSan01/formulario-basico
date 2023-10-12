import { ButtonType, InputType, SelectType } from "@/app/@types/TypeInput";


export const InputCamp = ({ name, type, placeholder, id, register }: InputType) => {

    return (
        <div className="divInput">
            <label htmlFor={id} className="w-full flex items-center">
                <span>
                    {name}
                </span>
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    id={id}
                    className="inputComponent"
                    name={name}
                    {...register(name)}
                />
            </label>
        </div>
    )
}

export const SelectInput = ({name, id, options, register}: SelectType) => {
 
    return(
        <div className="divInput">
            <label htmlFor={id} className="w-full flex items-center">
                <span>
                    Qual solução?
                </span>
                <select name={name} id={id} {...register(name)} className="inputComponent">
                    {options && options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.children}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export const ButtonSubmit = ({name}: ButtonType) => {
    return (
        <button>
            {name}
        </button>
    )
}