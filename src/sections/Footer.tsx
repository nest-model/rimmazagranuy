import { contacts, site } from '../data/content';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__in">
        <div>
          <p className="footer__name">{site.name}</p>
          <p className="footer__role">{site.role}<br />{site.cities}</p>
        </div>
        <div className="footer__contacts">
          <a href={contacts.phone.href}>{contacts.phone.display}</a>
          <a href={contacts.email.href}>{contacts.email.display}</a>
          <a href={contacts.vk.href} target="_blank" rel="noreferrer">ВКонтакте · {contacts.vk.display}</a>
          <a href={contacts.telegram.href} target="_blank" rel="noreferrer">Telegram {contacts.telegram.display}</a>
          <a href={contacts.instagram.href} target="_blank" rel="noreferrer">Instagram* {contacts.instagram.display}</a>
        </div>
      </div>
      <div className="wrap footer__legal">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>* Instagram принадлежит компании Meta, деятельность которой признана экстремистской и запрещена в России.</p>
      </div>
    </footer>
  );
}
