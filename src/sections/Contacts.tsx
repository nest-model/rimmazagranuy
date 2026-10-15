import { contactSection, contacts } from '../data/content';
import { IconPhone } from '../components/Icons';
import { CopyButton } from '../components/CopyButton';

export function Contacts() {
  return (
    <section className="contacts section" id="contacts" aria-labelledby="contacts-title">
      <div className="wrap center contacts__in">
        <h2 id="contacts-title" className="h2">{contactSection.title}</h2>
        <p className="lead center">{contactSection.text}</p>
        <a className="btn btn--gold btn--lg contacts__phone" href={contacts.phone.href}><IconPhone size={20} /> {contacts.phone.display}</a>
        <div className="contacts__main">
          <a className="cbtn cbtn--main" href={contacts.vk.href} target="_blank" rel="noreferrer"><small>ВКонтакте</small>{contacts.vk.display}</a>
          <div className="cbtn cbtn--main cbtn--mail">
            <a href={contacts.email.href} data-copy={contacts.email.display}><small>Почта</small>{contacts.email.display}</a>
            <CopyButton text={contacts.email.display} />
          </div>
        </div>
        <div className="contacts__more">
          <a className="cbtn" href={contacts.telegram.href} target="_blank" rel="noreferrer">Telegram {contacts.telegram.display}</a>
          <a className="cbtn" href={contacts.instagram.href} target="_blank" rel="noreferrer">Instagram* {contacts.instagram.display}</a>
        </div>
      </div>
    </section>
  );
}
