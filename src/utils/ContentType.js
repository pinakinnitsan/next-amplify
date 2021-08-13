// Load Core of React.js and Next.js
import React from "react";
import dynamic from "next/dynamic";

// Load Component Whenever It's Calling from CMS Page
const Brand = dynamic(() => import("../sections/Brand"), {
  ssr: false,
});
const Contact = dynamic(() => import("../sections/Contact"), {
  ssr: false,
});
const ContactForm = dynamic(() => import("../sections/ContactForm"), {
  ssr: false,
});
const CustomTab = dynamic(() => import("../sections/CustomTab"), {
  ssr: false,
});
const CustomTable = dynamic(() => import("../components/Core/Table"), {
  ssr: false,
});
const CTA = dynamic(() => import("../sections/CTA"), {
  ssr: false,
});
const Fact = dynamic(() => import("../sections/Fact"), {
  ssr: false,
});
const FAQ = dynamic(() => import("../sections/FAQ"), {
  ssr: false,
});
const Gallery = dynamic(() => import("../sections/Gallery"), {
  ssr: false,
});
const Hero = dynamic(() => import("../sections/Hero"), {
  ssr: false,
});
const HeaderOnly = dynamic(() => import("../sections/HeaderOnly"), {
  ssr: false,
});
const Image = dynamic(() => import("../components/Core/Image"), {
  ssr: false,
});
const IndexedSearch = dynamic(() => import("../sections/IndexedSearch"), {
  ssr: false,
});
const List = dynamic(() => import("../components/Core/List"), {
  ssr: false,
});
const Map = dynamic(() => import("../sections/Map"), {
  ssr: false,
});
const News = dynamic(() => import("../sections/News"), {
  ssr: false,
});
const Pricing = dynamic(() => import("../sections/Pricing"), {
  ssr: false,
});
const Process = dynamic(() => import("../sections/Process"), {
  ssr: false,
});
const Parallax = dynamic(() => import("../sections/Parallax"), {
  ssr: false,
});
const Slider = dynamic(() => import("../sections/Slider"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("../sections/Testimonials"), {
  ssr: false,
});
const Text = dynamic(() => import("../sections/Text"), {
  ssr: false,
});
const TextImage = dynamic(() => import("../sections/TextImage"), {
  ssr: false,
});
const Team = dynamic(() => import("../sections/Team"), {
  ssr: false,
});
const Teaser = dynamic(() => import("../sections/Teaser"), {
  ssr: false,
});
const TextPic = dynamic(() => import("../components/Core/TextPic"), {
  ssr: false,
});
const TwoColumnText = dynamic(() => import("../sections/TwoColumnText"), {
  ssr: false,
});
const Upload = dynamic(() => import("../sections/Upload"), {
  ssr: false,
});
const Video = dynamic(() => import("../sections/Video"), {
  ssr: false,
});

const ContentType = ({ pageContentProps }) => {
  if (!pageContentProps) {
    return false;
  }
  return (
    <>
      {pageContentProps.data &&
        pageContentProps.data.content &&
        pageContentProps.data.content.colPos0 &&
        pageContentProps.data.content.colPos0.map((items, index) => {
          if (items) {
            let contentType = items.type;
            let contentData = findValuesObject(
              items.content,
              "pi_flexform_content"
            );
            let contentList = findValuesObject(items.content, "data");
            return (
              <React.Fragment key={index}>
                {(() => {
                  switch (contentType) {
                    // Type: Brand
                    case "ns_brand":
                      return <Brand data={contentData[0]} />;
                      break;

                    case "bullets":
                      return <List data={items.content} />;
                      break;

                    // Type: CTA
                    case "ns_cta":
                      return <CTA data={contentData[0]} />;
                      break;

                    // Type: Contact
                    case "ns_contact":
                      return <Contact data={contentData[0]} />;
                      break;

                    // Type: Fact
                    case "ns_fact":
                      return <Fact type={1} data={contentData[0]} />;
                      break;

                    case "form_formframework":
                      return <ContactForm data={items.content} />;
                      break;

                    // Type: FAQ
                    case "ns_faq":
                      return <FAQ data={contentData[0]} />;
                      break;

                    // Type: HeaderOnly (Core)
                    case "header":
                      return <HeaderOnly data={items.content} />;
                      break;

                    // Type: Hero
                    case "ns_hero":
                      return <Hero data={contentData[0]} />;
                      break;

                    case "image":
                      return <Image data={items.content} />;
                      break;

                    case "ke_search_pi2":
                      return <IndexedSearch data={contentList} />;

                    case "ns_gallery":
                      return <Gallery data={contentData[0]} />;

                    // Type: NEWS
                    case "news_pi1":
                      return (
                        <News
                          data={contentList[0]}
                          dataHeader={items.content}
                        />
                      );
                      break;

                    // Type: Map
                    case "ns_map":
                      return <Map data={contentData[0]} />;
                      break;

                    // Type: Pricing
                    case "ns_pricing":
                      return <Pricing data={contentData[0]} />;
                      break;

                    // Type: Parallax
                    case "ns_parallax":
                      return <Parallax data={contentData[0]} />;
                      break;

                    // Type: Process;
                    case "ns_process":
                      return <Process data={contentData[0]} />;
                      break;

                    // Type: Process;
                    case "ns_slider":
                      return <Slider data={items.content} />;
                      break;

                    // Type: Teasers
                    case "ns_teasers":
                      return <Teaser data={contentData[0]} />;
                      break;

                    // Type: Testimonials
                    case "ns_testimonials":
                      return <Testimonials data={contentData[0]} />;
                      break;

                    // Type: Text (Core)
                    case "text":
                    case "html":
                      return <Text data={items.content} />;
                      break;

                    // Type: TextImage
                    case "ns_textImage":
                      return <TextImage data={contentData[0]} />;
                      break;

                    case "textpic":
                      return <TextPic data={items.content} />;
                      break;

                    case "table":
                      return <CustomTable data={items.content} />;
                      break;

                    // Type: TwoColumnText
                    case "ns_twocolumntext":
                      return <TwoColumnText data={contentData[0]} />;
                      break;

                    // Type: Team
                    case "ns_team":
                      return <Team data={contentData[0]} />;
                      break;

                    // Type: Team
                    case "ns_tab":
                      return <CustomTab data={contentData[0]} />;
                      break;

                    case "uploads":
                      return <Upload data={items.content} />;
                      break;

                    // Type: Video
                    case "ns_video":
                      return <Video data={contentData[0]} />;
                      break;
                  }
                })()}
              </React.Fragment>
            );
          }
        })}
      {/* <News /> */}
    </>
  );
};

export default ContentType;

// Recusive read json array object
function findValuesObject(obj, key) {
  return findValuesObjectHelper(obj, key, []);
}

function findValuesObjectHelper(obj, key, list) {
  if (!obj) return list;
  if (obj instanceof Array) {
    for (var i in obj) {
      list = list.concat(findValuesObjectHelper(obj[i], key, []));
    }
    return list;
  }
  if (obj[key]) list.push(obj[key]);

  if (typeof obj == "object" && obj !== null) {
    var children = Object.keys(obj);
    if (children.length > 0) {
      for (i = 0; i < children.length; i++) {
        list = list.concat(findValuesObjectHelper(obj[children[i]], key, []));
      }
    }
  }
  return list;
}
