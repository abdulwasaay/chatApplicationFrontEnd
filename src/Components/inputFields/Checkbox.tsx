
const CheckBoxField= ({types,styles={}}:any) => {
    return (
        <div>
            <input 
            type={types}
            style={{...styles}}
            className=" size-4"
            />
        </div>
    )
}

export default CheckBoxField