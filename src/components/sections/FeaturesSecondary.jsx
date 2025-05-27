import contentLp01 from "../../content/contentLp01";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import FeatureCardLP from "./lp01/FeatureCardLP";

export default function FeaturesLPSecondary() {
  return (
    <>
      <SectionArea paddingtop={false}>
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentLp01.featuresSecondary.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={
              contentLp01.featuresSecondary.sectionHeader.title
            }
            color=""
            titleColorSet="text-secondary"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={contentLp01.featuresSecondary.cards.card1.icon}
              title={contentLp01.featuresSecondary.cards.card1.title}
              description={
                contentLp01.featuresSecondary.cards.card1.description
              }
            />
            <FeatureCardLP
              icon={contentLp01.featuresSecondary.cards.card2.icon}
              title={contentLp01.featuresSecondary.cards.card2.title}
              description={
                contentLp01.featuresSecondary.cards.card2.description
              }
            />
            <FeatureCardLP
              icon={contentLp01.featuresSecondary.cards.card3.icon}
              title={contentLp01.featuresSecondary.cards.card3.title}
              description={
                contentLp01.featuresSecondary.cards.card3.description
              }
            />
            <FeatureCardLP
              icon={contentLp01.featuresSecondary.cards.card4.icon}
              title={contentLp01.featuresSecondary.cards.card4.title}
              description={
                contentLp01.featuresSecondary.cards.card4.description
              }
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
