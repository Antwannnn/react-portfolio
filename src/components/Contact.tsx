import { useTranslation } from "react-i18next"; 
import { FromBottomDiv, FromTopDiv } from "../Motion/MotionElements";
import { useState } from "react";

const Contact = ()=> {

    const { t } = useTranslation('translation', { keyPrefix: "contact" });

    const [result, setResult] = useState("");

    const onSubmit = async (event: any) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "dcc1d814-b447-48c0-aa27-2adf147d76cd");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
        <FromTopDiv className="text-primary z-10 w-full min-h-full px-3 py-10 flex flex-col text-center justify-center gap-10 items-center" 
        transition={{ type: 'spring', duration: 0.5 }}>
            
            <h1 className="text-5xl">
                {t('title')}
            </h1>
            <h2 className="text-2xl">{t('subtitle')}</h2>
            <form
            onSubmit={onSubmit}
            className="grid grid-cols-2 text-tertiary gap-3"
            >
                <input type="text" required placeholder={t('surnameplaceholder')} name="surname"/>
                <input type="text" required placeholder={t('nameplaceholder')} name="name"/>
                <input className="col-span-2" type="email" placeholder={t('emailplaceholder')} name="email"/>
                <textarea className="col-span-2 bg-opacity-60" name="message" id="message" rows={10} placeholder={t('messageplaceholder')}/>
                <button className="button col-span-2 py-4">{t('button')}</button>
            </form>
        </FromTopDiv>
    );
};

export default Contact;