import propTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Function that create the Dashboard component for user profil.
 * @component
 * @param {String} firstName 
 * @returns {reactElement} 
 */
const Welcome = ({ firstName }) => {
  return (
    <Container>
      <Head>Bonjour <UserName>{firstName}</UserName></Head>
      <Message>{`Félicitation ! Vous avez explosé vos objectifs hier 👏`}</Message>
    </Container>
  );
}

export default Welcome;

Welcome.propTypes = {
  firstName: propTypes.string.isRequired
};

const Container = styled.header`
grid-area: ti;
display: flex;
flex-direction: column;
`;
const Head = styled.h1`
font-size: 48px;
font-weight: 600;
`;
const UserName = styled.span`
color: red;
`;
const Message = styled.span`
font-size: 18px;
`;