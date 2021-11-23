import { useState } from 'react';
import SignUpPJ from '../../organisms/SignUpPJ';
import CategoriesSelect from '../../organisms/CategoriesSelect';

export default function SignUpPage() {
  const [showCategoriesSelect, setShowCategoriesSelect] = useState(false);

  const toggleScreenDisplay = () => {
    setShowCategoriesSelect(!showCategoriesSelect);
  };

  return (
    <>
    {
      !showCategoriesSelect && <SignUpPJ onSuccess={toggleScreenDisplay}/>
    }
    {
      showCategoriesSelect && <CategoriesSelect minLimit={3}/>
    }
    </>
  )
}