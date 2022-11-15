import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link, useI18next, Trans, useTranslation } from 'gatsby-plugin-react-i18next';

const Header = () => {
  const {t} = useTranslation();

  const {languages, originalPath} = useI18next();

  return (
    <header>
        <Navbar>
          <Nav>
            <Link to="/" className="link-no-style">
              <Trans>First Page</Trans>
            </Link>
          </Nav>
          <Nav>
            <NavDropdown.Divider />
            <NavDropdown title={t('Language')} id="nav-dropdown-lang" className="link-no-style languages">
              {languages.map((lng) => (
                <NavDropdown.Item key={lng}>
                <Link to={originalPath} className="link-no-style" language={lng}>
                  <Nav.Link as="span" eventKey={lng}>
                    {lng}
                  </Nav.Link>
                </Link>
              </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        
        {/* </Container> */}
      </Navbar>
    </header>
  );
};

export default Header;
