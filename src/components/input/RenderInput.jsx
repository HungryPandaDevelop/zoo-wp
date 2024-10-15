import InputText from '/src/components/input-base/InputText'; // поле стандартное
import InputPassword from '/src/components/input-base/InputPassword'; // поле пароля
import InputFile from '/src/components/input-base/InputFile'; // поле файла
import InputFileSingle from '/src/components/input-base/InputFileSingle'; // поле файла
import InputSwitch from '/src/components/input-base/InputSwitch'; // поле switch
import InputRadio from '/src/components/input-base/InputRadio'; // поле radio
import InputCheckbox from '/src/components/input-base/InputCheckbox'; // поле checkbox
import InputTextarea from '/src/components/input-base/InputTextarea'; // поле textarea
import InputPhone from '/src/components/input-base/InputPhone'; // поле phone
import InputSearchSuggest from '/src/components/input-base/InputSearchSuggest'; // поле search
import InputSearch from '/src/components/input-base/InputSearch'; // поле search
import InputSelect from '/src/components/input-base/InputSelect'; // поле select
import InputDate from '/src/components/input-base/InputDate'; // поле date
import InputChoisePosts from '/src/components/input-base/InputChoisePosts'; // поле select

// import InputComplex from '/src/components/input-base/InputComplex'; // поле COMPLEX
import InputMulty from '/src/components/input-base/InputMulty'; // поле EXTRA
// import InputAdd from '/src/components/input-base/InputAdd'; // поле ADD

import InputAnimals from '/src/components/input-base/InputAnimals'; // поле ADD
import InputAnimalSingle from '/src/components/input-base/InputAnimalSingle'; // поле ADD

import InputTargetSale from '/src/components/input-base/InputTargetSale'; // поле ADD
import InputClear from '/src/components/input-base/InputClear'; // поле ADD
import InputChoiseBtn from '/src/components/input-base/InputChoiseBtn'; // поле ADD
import InputRulesFromAcf from '/src/components/input-base/InputRulesFromAcf'; // поле ADD
import InputPrice from '/src/components/input-base/InputPrice'; // поле ADD
import InputChoisePostsPets from '/src/components/input-base/InputChoisePostsPets'; // поле ADD
import InputChoisePostsCompany from '/src/components/input-base/InputChoisePostsCompany'; // поле ADD
import InputEmodsy from '/src/components/input-base/InputEmodsy'; // поле ADD


import { createValidateArr } from '/src/components/input/validator';




const choiseInputType = (obj) => {
  switch (obj.type) {
    case 'text': return <InputText obj={obj} />
    case 'password': return <InputPassword obj={obj} />
    case 'file': return <InputFile obj={obj} />
    case 'fileSingle': return <InputFileSingle obj={obj} />
    case 'switch': return <InputSwitch obj={obj} />
    case 'radio': return <InputRadio obj={obj} />
    case 'checkbox': return <InputCheckbox obj={obj} />
    case 'textarea': return <InputTextarea obj={obj} />
    case 'phone': return <InputPhone obj={obj} />
    case 'suggest': return <InputSearchSuggest obj={obj} />
    case 'search': return <InputSearch obj={obj} />
    case 'select': return <InputSelect obj={obj} />
    case 'date': return <InputDate obj={obj} />
    case 'multy': return <InputMulty obj={obj} />
    case 'animals': return <InputAnimals obj={obj} />
    case 'animalSingle': return <InputAnimalSingle obj={obj} />
    case 'posts': return <InputChoisePosts obj={obj} />
    case 'targetSale': return <InputTargetSale obj={obj} />
    case 'choiseBtn': return <InputChoiseBtn obj={obj} />
    case 'rulesFromAcf': return <InputRulesFromAcf obj={obj} />
    case 'price': return <InputPrice obj={obj} />
    case 'choisePets': return <InputChoisePostsPets obj={obj} />
    case 'choiseCompany': return <InputChoisePostsCompany obj={obj} />
    case 'emodsy': return <InputEmodsy obj={obj} />

    case 'clear': return <InputClear obj={obj} />
    default: return 'Empty Field';
  }
}

const RenderInput = ({ param }) => {
  return choiseInputType({ ...param, 'validate': createValidateArr(param.validate) });
}


export default RenderInput;
