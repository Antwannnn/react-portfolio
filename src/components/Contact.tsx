import { useTranslation } from "react-i18next"; 
import { FromBottomDiv, FromTopDiv } from "../Motion/MotionElements";

const Contact = ()=> {

    const { t } = useTranslation('translation', { keyPrefix: "contact" });

    return (
        <FromTopDiv className="text-primary z-10 w-full min-h-full px-3 py-10 flex flex-col text-center justify-center gap-10 items-center" 
        transition={{ type: 'spring', duration: 0.5 }}>
            
            <h1 className="text-5xl">
                {t('title')}
            </h1>
            <h2 className="text-2xl">{t('subtitle')}</h2>
            <FromBottomDiv 
            className="grid grid-cols-2 text-tertiary gap-3"
            transition={{ type: 'spring', duration: 0.5, delay: 0.5 }}
            >
                <input type="text" placeholder={t('surnameplaceholder')}/>
                <input type="text" placeholder={t('nameplaceholder')}/>
                <input className="col-span-2" type="text" placeholder={t('emailplaceholder')}/>
                <textarea className="col-span-2 bg-opacity-60" name="message" id="message" rows={10} placeholder={t('messageplaceholder')}/>
                <button className="button-red col-span-2 py-4">{t('button')}</button>
            </FromBottomDiv>
        </FromTopDiv>
    );
};

export default Contact;