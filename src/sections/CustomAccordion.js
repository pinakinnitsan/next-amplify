import { useEffect, useState, useRef } from "react";
import {
  Container,
  useAccordionToggle,
  Accordion,
  Card,
} from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const CustomToggle = ({ handleKey, children, eventKey, callback }) => {
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    handleKey(eventKey);
  });

  return (
    <button
      className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-4 accordion-trigger arrow-icon w-100"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

const CustomAccordion = ({ data, faq }) => {
  const [accordionKey, setAccordionKey] = useState("0");
  const [count, setCount] = useState(0);
  const accordionEl = useRef();

  useEffect(() => {
    setCount(count + 1);

    if (!count) return;

    setTimeout(() => {
      let activeCard = accordionEl.current.querySelector(".active-card");
      if (!activeCard) return;
      let distance = 0;
      do {
        distance += activeCard.offsetTop;
        activeCard = activeCard.offsetParent;
      } while (activeCard);
      distance = distance < 0 ? 0 : distance;

      window.scrollTo({
        top: distance - 20,
        left: 0,
        behavior: "smooth",
      });
    }, 300);
  }, [accordionKey]);

  const handleKey = (key) => {
    if (key === accordionKey) {
      setAccordionKey(null);
      return;
    }
    setAccordionKey(key);
  };

  const renderAccordions = (accordions) => {
    return accordions.map((accordion, id) => {
      return (
        <Card
          key={accordion.question}
          className={`${id == accordionKey ? "active-card" : ""}`}
        >
          <Card.Header>
            {accordion.question && (
              <CustomToggle handleKey={handleKey} eventKey={`${id}`}>
                {accordion.question}
              </CustomToggle>
            )}
          </Card.Header>
          <Accordion.Collapse eventKey={`${id}`}>
            <Card.Body>
              {accordion.answer && (
                <ReactMarkdown escapeHtml={false} source={accordion.answer} />
              )}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    });
  };

  if (!data) return <>No data found!</>;

  return (
    <div
      ref={accordionEl}
      data-aos="fade-up"
      className={`accordion-section pt-14 pt-lg-25 pb-7 pb-lg-11 ${
        faq ? "faq-accordion-section" : ""
      }`}
    >
      <Container>
        {/* <div className="section-title mb-13">
          <h2 className="title gr-text-4">Accordions</h2>
        </div> */}
        <div className="accordion-wrapper">
          <Accordion defaultActiveKey="0">
            {data.accordions && Object.values(data.accordions).length
              ? renderAccordions(Object.values(data.accordions))
              : ""}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default CustomAccordion;
