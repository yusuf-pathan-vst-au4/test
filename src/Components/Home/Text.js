import React, { Component } from "react";

class Text extends Component {
  render() {
    console.log(this.props.text);
    switch (this.props.text) {
      case "covid":
        return (
          <div>
            <p>
              In early April, researchers measured seroprevalence of antibodies
              to SARS-CoV-2 among residents in Santa Clara Country. Using their
              data, the team calculated COVID-19 prevalence estimates 50–85-fold
              more than the number of confirmed cases. This implies that the
              infection is much more widespread than indicated by the number of
              confirmed cases. A retrospective multicenter study analyzed data
              from 191 COVID-19 patients hospitalized in Wuhan (China) in
              January 2020, in order to identify risk factors for mortality and
              severity of illness. The researchers discovered that, among other
              factors, older age increased the likelihood of in-hospital death.
              Further, they observed that the median duration of viral shedding
              was 20 days. Researchers calculated the reproductive number, R,
              for each Chinese city with more than 40 cases of the novel
              coronavirus. Using the daily R values from 21–23 January 2020 and
              linear regression modelling, they demonstrated that high
              temperature and high humidity could reduce the transmission of
              COVID-19, respectively. Though their results may seem to suggest
              that the arrival of summer and rainy season could reduce
              transmission of the virus, they also acknowledged that 80% of
              R-value fluctuations cannot be explained by temperature and
              humidity, therefore other measures are important for reducing
              transmission.
            </p>
          </div>
        );
      case "spanishflu":
        return (
          <div>
            <p>
              The 1918 influenza pandemic was the most severe pandemic in recent
              history. It was caused by an H1N1 virus with genes of avian
              origin. Although there is not universal consensus regarding where
              the virus originated, it spread worldwide during 1918-1919. In the
              United States, it was first identified in military personnel in
              spring 1918. It is estimated that about 500 million people or
              one-third of the world’s population became infected with this
              virus. The number of deaths was estimated to be at least 50
              million worldwide with about 675,000 occurring in the United
              States. Mortality was high in people younger than 5 years old,
              20-40 years old, and 65 years and older. The high mortality in
              healthy people, including those in the 20-40 year age group, was a
              unique feature of this pandemic. While the 1918 H1N1 virus has
              been synthesized and evaluated, the properties that made it so
              devastating are not well understood. With no vaccine to protect
              against influenza infection and no antibiotics to treat secondary
              bacterial infections that can be associated with influenza
              infections, control efforts worldwide were limited to
              non-pharmaceutical interventions such as isolation, quarantine,
              good personal hygiene, use of disinfectants, and limitations of
              public gatherings, which were applied unevenly.
            </p>
          </div>
        );

      case "dengue":
        return (
          <div>
            <p>
              A mosquito-borne viral disease occurring in tropical and
              subtropical areas. Those who become infected with the virus a
              second time are at a significantly greater risk of developing
              severe disease. Symptoms include high fever, headache, rash and
              muscle and joint pain. In severe cases there is serious bleeding
              and shock, which can be life threatening. Treatment includes
              fluids and pain relievers. Severe cases require hospital care.
              Dengue fever is a mosquito-borne tropical disease caused by the
              dengue virus. Symptoms typically begin three to fourteen days
              after infection. These may include a high fever, headache,
              vomiting, muscle and joint pains, and a characteristic skin rash.
              Recovery generally takes two to seven days. Sometimes, symptoms
              are mild and can be mistaken for those of the flu or another viral
              infection. Younger children and people who have never had the
              infection before tend to have milder cases than older children and
              adults. However, serious problems can develop. These include
              dengue hemorrhagic fever, a rare complication characterized by
              high fever, damage to lymph and blood vessels, bleeding from the
              nose and gums, enlargement of the liver, and failure of the
              circulatory system. The symptoms may progress to massive bleeding,
              shock, and death. This is called dengue shock syndrome (DSS).
              People with weakened immune systems as well as those with a second
              or subsequent dengue infection are believed to be at greater risk
              for developing dengue hemorrhagic fever.
            </p>
          </div>
        );
      default:
        return <div>Select from above dropdown</div>;
    }
  }
}

export default Text;
