import React from 'react';
import { useHistory } from 'react-router-dom';
import { LinkBase } from '@aragon/ui';
import { useTheme } from '@aragon/ui';

function Footer() {
  const history = useHistory();
  const theme = useTheme();

  return (
    <>
      <div style={{
        borderTop: '1px solid ' + theme.border,
        backgroundColor: theme.surface,
        textAlign: 'center',
        position: 'fixed',
        left: '0',
        bottom: '0',
        height: 'auto',
        width: '100%',
        fontSize: '14px'
      }}>
        <div style={{maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto'}}>
          <div style={{ padding: '2%', display: 'flex'}}>
            <div style={{ width: '50%', textAlign: 'left' }}>
              <FooterLink icon={<i className="fab fa-github"/>} href={"https://www.github.com/emptysetsquad/dollar"}/>
              <FooterLink icon={<i className="fab fa-twitter"/>} href={"https://www.twitter.com/emptysetsquad"}/>
              <FooterLink icon={<i className="fab fa-medium"/>} href={"https://www.medium.com/@emptysetsquad"}/>
              <FooterLink icon={<i className="fab fa-telegram"/>} href={"https://www.t.me/emptysetdollar"}/>
              <FooterLink icon={<i className="fab fa-discord"/>} href={"https://discord.gg/vPws9Vp"}/>
            </div>
            <div style={{ width: '50%', textAlign: 'right', height: '18px', marginTop: '15px', marginBottom: '15px'}}>
              made with <span role="img" aria-labelledby="heartbreak">💔️</span> by the &#123;ess&#125;.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


type FooterLinkProp = {
  icon: any,
  href: string,
}

function FooterLink({
  icon, href,
}:FooterLinkProp) {
  return (
    <LinkBase href={href} style={{marginLeft: '8px', marginRight: '8px'}}>
      <span style={{ fontSize: 32 }}>{icon}</span>
    </LinkBase>
  );
}

export default Footer;
