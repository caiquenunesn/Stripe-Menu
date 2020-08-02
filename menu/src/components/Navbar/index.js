import React from 'react';
import { DropdownProvider , DropdownOptions, DropdownRoot } from '../Dropdown';
import { Products, Developers, Company } from '../Content';
import { Container, DropdownStyles } from './styles';


function Navbar() {
  return (
      <DropdownProvider>
        <DropdownStyles>
            <Container>
                <ul>
                    <li>
                        <DropdownOptions name="Produtos" content={Products} backgroundHeight={286} />
                    </li>
                    <li>
                        <DropdownOptions name="Desenvolvedores" content={Developers} backgroundHeight={167}/>
                    </li>
                    <li>
                        <DropdownOptions name="Empresa" content={Company} backgroundHeight={215}/>
                    </li>
                </ul>
            </Container>

            <DropdownRoot />
        </DropdownStyles>
      </DropdownProvider>
  );
}

export default Navbar;