import React, { useState, useEffect } from 'react';
import Contact from '../Photos/contact.png';
import BACKEND_URL from '../config';
const ContactPage = () => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const createNewChat = () => {
    setMessage('');
    setValue('');
    setCurrentTitle(null);
  };

  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage('');
    setValue('');
  };

  const getMessage = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(BACKEND_URL + 'completions', options);
      const data = await response.json();
      setMessage(data.choices[0].message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        {
          title: currentTitle,
          role: 'user',
          content: value,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
      ]);
    }
  }, [message, currentTitle]);

  const currentChat = previousChats.filter((previousChat) => previousChat.title === currentTitle);
  const uniqueTitles = Array.from(new Set(previousChats.map((previousChat) => previousChat.title)));

  // Accordion state for FAQs
  const [faqOpen, setFaqOpen] = useState(Array(10).fill(false));

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Contact</h1>
        <img src={Contact} alt="Contact Gecko" className="hero-image" />
      </section>

      {/* Live Chat and Contact Form Section */}
      <section className="chat-contact-section">
        {/* Live Chat */}
        <div className="live-chat">
          <h2>Live Chat</h2>
          <div className="chat-window">
            <ul className="feed">
  {currentChat?.map((chatMessage, index) => (
    <li key={index} className={chatMessage.role === 'user' ? 'message user-message' : 'message assistant-message'}>
      <p className="content">{chatMessage.content}</p>
    </li>
  ))}
</ul>

          </div>
            <div className="bottom-section">
              <div className="input-container d-flex">
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Ask me something..."
                />
                <div id="submit" onClick={getMessage}>
                  ➢
                </div>
              </div>
              {/* <p className="info">
                Chat GPT Mar 14 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with.
              </p> */}
            </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          {faqData.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <div className="accordion-title" onClick={() => toggleFaq(index)}>
                {faq.question}
              </div>
              {faqOpen[index] && <div className="accordion-content">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// FAQ data
const faqData = [
  { question: 'How often should I feed my snake?', answer: 'Snakes typically eat every 1-2 weeks depending on their size and species.' },
  { question: 'What kind of lighting does my turtle need?', answer: 'Turtles need both UVB and heat lamps to simulate natural sunlight for proper growth.' },
  { question: 'Can reptiles recognize their owners?', answer: 'Some reptiles, like iguanas and bearded dragons, may recognize their owners through sight and smell.' },
  { question: 'How often should I clean my reptile’s habitat?', answer: 'You should spot-clean daily and do a deep clean of the habitat every 4-6 weeks.' },
  { question: 'What is the best temperature for a bearded dragon’s habitat?', answer: 'Bearded dragons require a basking area of 95-110°F and a cooler side of 75-85°F.' },
  { question: 'How do I know if my reptile is sick?', answer: 'Look for signs such as lethargy, lack of appetite, unusual stool, or abnormal shedding. Consult a vet if these occur.' },
  { question: 'How long can reptiles live?', answer: 'The lifespan of reptiles varies by species. Some can live for 10-50 years or more with proper care.' },
  { question: 'Do reptiles need regular vet checkups?', answer: 'Yes, reptiles should have annual vet checkups to monitor their health and catch potential issues early.' },
  { question: 'What should I feed my gecko?', answer: 'Most geckos eat a variety of insects like crickets, mealworms, and waxworms. Some species also enjoy fruit or commercial diets.' },
  { question: 'What size terrarium should I get for my reptile?', answer: 'The size of the terrarium depends on the species. Generally, reptiles need a space at least twice their body length.' },
];

export default ContactPage;

