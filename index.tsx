import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./index.module.css";

const DaamdesignerwixsitecomByHt: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.daamdesignerwixsitecomByHt}>
      <button
        className={styles.fCaf7d704d774479b9d154220c65c}
        autoFocus
        data-animate-on-scroll
      />
      <div className={styles.buttonminimizedChat}>
        <img className={styles.svgIcon} alt="" src="/svg.svg" />
        <div className={styles.h21b36b}>
          <div className={styles.letsChat}>Let's Chat!</div>
        </div>
      </div>
      <div className={styles.divsiteContainer}>
        <div className={styles.divbglayersPagebackgroundLj}>
          <div className={styles.divlwbaav} />
        </div>
        <div className={styles.divmasterpage}>
          <div className={styles.div}>
            <div className={styles.div1}>
              <div className={styles.divso7ias}>
                <div className={styles.div2}>
                  <img className={styles.svgIcon1} alt="" src="/svg1.svg" />
                  <b className={styles.daminiChandra}>DAMINI Chandra</b>
                  <b className={styles.dataAnalyst}>DATA ANALYST</b>
                </div>
                <div className={styles.div3}>
                  <div className={styles.ulcompJoy60gmgitemscontainer}>
                    <div className={styles.onlineCourses}>Online Courses</div>
                    <div className={styles.more}>More</div>
                  </div>
                  <div className={styles.socialBar}>
                    <img
                      className={styles.fdef751204647a3bbd7eaa2827ed4fIcon}
                      alt=""
                      src="/0fdef751204647a3bbd7eaa2827ed4f9png@2x.png"
                    />
                    <img
                      className={styles.c7d035ba85f6486680c2facedecdcfIcon}
                      alt=""
                      src="/c7d035ba85f6486680c2facedecdcf4dpng@2x.png"
                    />
                    <img
                      className={styles.aa2057f0cb42fbbaffcbc36280a64aIcon}
                      alt=""
                      src="/78aa2057f0cb42fbbaffcbc36280a64apng@2x.png"
                    />
                  </div>
                </div>
              </div>
              <b className={styles.analysticsConsultant}>
                ANALYSTICS CONSULTANT
              </b>
              <div className={styles.collectionProcessAnalyse}>
                Collection process, analyse and present data -from supporting
                everday business decisions to driving Global change.
              </div>
              <div className={styles.adjqeyu}>
                <a
                  className={styles.reserveMySpot}
                  href="https://daamdesigner.wixsite.com/mysite/event-details/free-digital-marketing-webinar"
                  target="_blank"
                >
                  Reserve My Spot
                </a>
              </div>
            </div>
            <div className={styles.sectioncompLgamb2o11}>
              <div className={styles.div4}>
                <div className={styles.divcompLganq535}>
                  <div className={styles.divbglayersCompJrqe7gwi}>
                    <div className={styles.divlwbaav} />
                    <img
                      className={styles.divfrcqdfIcon}
                      alt=""
                      src="/divfrcqdf.svg"
                    />
                  </div>
                  <div className={styles.featuredOn}>Featured on</div>
                </div>
                <div className={styles.divcompLganq5351}>
                  <div className={styles.divs5mc6u} />
                  <img
                    className={styles.divttx6xbIcon}
                    alt=""
                    src="/divttx6xb@2x.png"
                  />
                  <img
                    className={styles.divgk5onaIcon}
                    alt=""
                    src="/divgk5ona@2x.png"
                  />
                </div>
                <img
                  className={styles.bigWork1}
                  alt=""
                  src="/big-work-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.divcompJrqe7gk4}>
              <div className={styles.divbglayersCompJrqe7gwi}>
                <div className={styles.divlwbaav} />
              </div>
              <div className={styles.div5}>
                <img
                  className={styles.divj7ponlIcon}
                  alt=""
                  src="/divj7ponl@2x.png"
                />
                <div className={styles.h2font0}>
                  <b className={styles.hiImDamniContainer}>
                    <span className={styles.hiImDamniContainer1}>
                      <p className={styles.hi}>Hi,</p>
                      <p className={styles.hi}>I'm Damni</p>
                    </span>
                  </b>
                </div>
                <div className={styles.sinceIWas}>
                  Since I was young, I have always enjoyed to solve puzzles. So
                  that’s how I look at big data sets: to me it is one big puzzle
                  I want to solve. Finding patterns nobody else sees is the
                  challenge to me.
                </div>
                <div className={styles.divcompJrqe7glc}>
                  <div className={styles.asAFreelance}>
                    As a freelance data analyst and data scientist, I translate
                    data into valuable and comprehensible insights. My goal is
                    to improve results, make the right decisions and save costs.
                  </div>
                  <div className={styles.iAmExperienced}>
                    I am experienced in machine learning, supervised and
                    unsupervised algorithms and use data visualization
                    techniques to present the results. I use SQL, R, Python,
                    QlikView and Tableau for my data projects.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcompJrqe7gwi}>
              <div className={styles.divbglayersCompJrqe7gwi}>
                <div className={styles.divlwbaav3} />
              </div>
              <div className={styles.div6}>
                <b className={styles.whatPeopleSay}>What People Say</b>
                <div className={styles.slideshow}>
                  <div className={styles.divbglayersCompJrqe7gwi}>
                    <div className={styles.divbglayersCompJrqe7gwi}>
                      <div className={styles.divbglayersCompJrqe7gwi}>
                        <div className={styles.divlwbaav3} />
                      </div>
                      <div className={styles.div7}>
                        <img
                          className={styles.svgIcon2}
                          alt=""
                          src="/svg2.svg"
                        />
                        <div className={styles.wonderingHowYou}>
                          WONDERING HOW YOU CAN MAKE THE BEST DECISIONS USING
                          YOUR DATA?
                        </div>
                        <b className={styles.damini}>Damini</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.olhhjgmk}>
                    <div className={styles.slide1} />
                    <div className={styles.slide2} />
                    <div className={styles.slide3} />
                  </div>
                  <img className={styles.svgIcon3} alt="" />
                  <img className={styles.svgIcon4} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.sectioncompLgao0sbg}>
              <div className={styles.divbglayersCompJrqe7gwi}>
                <div className={styles.divlwbaav5} />
              </div>
              <div className={styles.div8}>
                <div className={styles.divcompLgao0sdm}>
                  <b className={styles.services}>SERVICES</b>
                  <div className={styles.damini1}>Damini</div>
                  <div className={styles.pfont8}>
                    <div className={styles.asDataScientistContainer}>
                      <span className={styles.hiImDamniContainer1}>
                        <span>
                          As data scientist, I know exactly how you can use data
                          optimally within your business. Based on your
                          objectives, we will make a plan to reach the right
                          insight
                        </span>
                        <span className={styles.span}>.</span>
                      </span>
                    </div>
                  </div>
                  <div className={styles.iAmAvailable}>I am available for:</div>
                  <div className={styles.ulfont8}>
                    <div className={styles.dataSciencePrediction}>
                      Data science (prediction models, segmentations)
                    </div>
                    <div className={styles.dataAnalysis}>Data analysis</div>
                    <div className={styles.dataVisualisationInfographi}>
                      Data visualisation (infographics, dashboards)
                    </div>
                    <div className={styles.adviceAndCoaching}>
                      Advice and coaching data projects
                    </div>
                    <div className={styles.trainingAndWorkshops}>
                      Training and workshops (start with data analysis, how to
                      answer questions with data, hands-on SQL, hands-on R)
                    </div>
                    <div className={styles.presentationsStorytellingH}>
                      Presentations (storytelling, how to present data, how do
                      other businesses use data?)
                    </div>
                  </div>
                  <div className={styles.rates}>Rates</div>
                  <div className={styles.ulfont81}>
                    <div className={styles.dataScienceData}>
                      Data science, data analysis and visualisation projects:
                      $840 per day
                    </div>
                    <div className={styles.presentationsTrainingAnd}>
                      Presentations, training and workshops starting from $600
                      (max 4 hours)
                    </div>
                    <div className={styles.fullDayTrainingStarting}>
                      Full-day training starting from $1250
                    </div>
                  </div>
                  <div className={styles.ratesAreExcluding}>
                    Rates are excluding VA
                  </div>
                </div>
                <div className={styles.startNow}>
                  <div className={styles.divbglayersCompJrqe7gwi}>
                    <div className={styles.spanstylablebutton2545352419}>
                      <div className={styles.letsChat}>Start Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sectioncompLgao9lpo}>
              <div className={styles.divbglayersCompJrqe7gwi}>
                <div className={styles.divlwbaav} />
              </div>
              <div className={styles.div9}>
                <b className={styles.contact}>Contact</b>
                <img className={styles.svgIcon5} alt="" src="/svg3.svg" />
                <div className={styles.gurgaonHaryanaSector}>
                  GURGAON ,HARYANA SECTOR 14
                </div>
                <img className={styles.svgIcon6} alt="" src="/svg4.svg" />
                <div className={styles.xx}>93190544XX</div>
                <img className={styles.svgIcon7} alt="" src="/svg5.svg" />
                <a
                  className={styles.damnichandragmailcom}
                  href="mailto:Damnichandra@gmail.com"
                  target="_blank"
                >
                  Damnichandra@gmail.com
                </a>
                <img className={styles.svgIcon8} alt="" src="/svg6.svg" />
                <div className={styles.socialBar1}>
                  <img
                    className={styles.fdef751204647a3bbd7eaa2827ed4fIcon1}
                    alt=""
                    src="/0fdef751204647a3bbd7eaa2827ed4f9png1@2x.png"
                  />
                  <img
                    className={styles.c7d035ba85f6486680c2facedecdcfIcon1}
                    alt=""
                    src="/c7d035ba85f6486680c2facedecdcf4dpng1@2x.png"
                  />
                  <img
                    className={styles.ea5b4a88f0b4f91945b40499aa0af0Icon}
                    alt=""
                    src="/6ea5b4a88f0b4f91945b40499aa0af00png@2x.png"
                  />
                  <img
                    className={styles.c3aff52f2a4dffa526d7a9843d46eaIcon}
                    alt=""
                    src="/01c3aff52f2a4dffa526d7a9843d46eapng@2x.png"
                  />
                </div>
                <div className={styles.div10}>
                  <div className={styles.divcompLgao9ls0}>
                    <div className={styles.firstName}>First Name</div>
                    <div className={styles.inputinputCompLgao9lsb} />
                  </div>
                  <div className={styles.divcompLgao9lsb}>
                    <div className={styles.lastName}>Last Name</div>
                    <div className={styles.inputinputCompLgao9lsb} />
                  </div>
                  <div className={styles.divcompLgao9lse1}>
                    <div className={styles.labelwpea6j}>
                      <div className={styles.email}>Email *</div>
                    </div>
                    <div className={styles.inputinputCompLgao9lsb} />
                  </div>
                  <div className={styles.divcompLgao9lsi}>
                    <div className={styles.message}>Message</div>
                    <div className={styles.textareatextareaCompLgao9ls} />
                  </div>
                  <div className={styles.buttonkutagy}>
                    <div className={styles.send}>Send</div>
                  </div>
                </div>
                <div className={styles.divcompLgao9lt4} />
              </div>
            </div>
          </div>
          <div className={styles.div4xctfy} />
        </div>
      </div>
    </div>
  );
};

export default DaamdesignerwixsitecomByHt;
