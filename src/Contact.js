import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8200454045727!2d72.96295701437869!3d19.203060702957618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91418903a25%3A0x25b4d80f2aa419d9!2sKorum%20Mall%2C%20Samata%20Nagar%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra%20400606!5e0!3m2!1sen!2sin!4v1671864711274!5m2!1sen!2sin"
      width="90%" height="450"
      style={{ border: 0 }}
      allowFullScreen="" loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mlekropr" method="POST" className="contact-inputs">
          <input type="text" placeholder="your name"
            name="username" required autoComplete="off" />

          <input type="email" placeholder="your email"
            name="email" required autoComplete="off" />

          <textarea name="messege" placeholder="your messege.." cols="30" rows="10" required autoComplete="off"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;
