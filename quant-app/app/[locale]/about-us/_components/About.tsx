"use client"

import { Button, Grid2, Typography, useMediaQuery } from "@mui/material"
import { useTranslations } from "next-intl";
import Image from "next/image"
import { useState } from "react";


const About = () => {
  const t = useTranslations("about-us");
  const mediumScreen = useMediaQuery("(max-width:900px)");
  const [expandAboutUsText, setExpandAboutUsText] = useState(false);


  const toggleExpand = () => {
    setExpandAboutUsText(!expandAboutUsText);
  };
  return (
    <div className="px-[5%]">
      <Grid2
        container
        direction="row"
        sx={{
          display: "flex",
          marginTop: "140px",
          position: "relative",
          zIndex: 1,
          justifyContent: "center",
        }}
      >
        <Grid2 size={3} className="" >
          <Image
            width={0}
            height={0}
            className=" max-w-[1300px] w-[185%] translate-x-[-80px] translate-y-[-80px]"
            src="/images/app-phone.png"
            alt="Iphone"
            unoptimized={true}
          />
        </Grid2>

        <Grid2
          container
          size={9}
          gap="30px"
          alignContent="start"
          height="fit-content"
        >
          <Grid2
            container
            gap="5px"
            sx={{
              alignItems: "center",
              height: "fit-content",
              "& h1": {
                fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                color: "white",
                fontWeight: "600",
              },
            }}
          >
            <Grid2 width="fit-content">
              <Typography sx={{
                fontSize: "64px",
                "@media (max-width: 900px)": {
                  fontSize: "46px",
                },
              }} variant="h1">{t("AboutUs")}</Typography>
            </Grid2>

            <Grid2 size={6}>
              <Typography
              className="max-[900px]:!hidden text-white"
                sx={{
                  fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                  fontSize: "20px",
                  "@media (max-width: 900px)": {
                    fontSize: "16px",
                  },
                }}>
                {t("WhereInnovationsMeetsVisionCrafting")}
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            container
            sx={{
              height: "fit-content",
              "& p": {
                fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                color: "white",
              },
            }}
          >
            <Typography className="
            !text-[30px]
            max-[1900px]:!text-[27px]
            max-[1600px]:!text-[23px] 
            max-[1400px]:!text-[20px] 
            max-[900px]:!text-[16px]
            text-justify
            ">{t("AboutUsTextStaticParagraph")}</Typography>

            <Typography className="
            !text-[30px]
            max-[1900px]:!text-[27px]
            max-[1600px]:!text-[23px]
            max-[1400px]:!text-[20px] 
            max-[900px]:!text-[16px]
            max-[900px]:!hidden
            text-justify
            ">
              {t("ExpandableAboutUsTextParagraphFirstPart")}
              <br />
              {t("ExpandableAboutUsTextParagraphSecondPart")}
              <br />
              {t("ExpandableAboutUsTextParagraphThirdPart")}
            </Typography>
          </Grid2>
        </Grid2>

        <Grid2
          container
          sx={{
            display: mediumScreen && expandAboutUsText ? "block" : "none",
            "& p": {
              fontFamily: `"ClashDisplay", "Inter", sans-serif`,
              color: "white",
              fontSize: "16px",
            },
          }}
        >
          <Typography>
            {t("ExpandableAboutUsTextParagraphFirstPart")}
          </Typography>

          <Typography>
            {t("ExpandableAboutUsTextParagraphSecondPart")}
          </Typography>

          <Typography>
            {t("ExpandableAboutUsTextParagraphThirdPart")}
          </Typography>
        </Grid2>

        <Grid2
          container
          sx={{
            mt: "20px",
            display: mediumScreen ? "block" : "none",
          }}
        >
          {expandAboutUsText ? (
            <Button
              onClick={() => toggleExpand()}
              sx={{
                border: "1px solid white",
                backgroundColor: "transparent",
                width: "120px",
                height: "30px",
                borderRadius: "8px",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <Typography
                sx={{
                  textTransform: "none",
                  fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                  color: "white",
                  fontSize: "14px",
                }}
              >
                {t("Collapse")}
              </Typography>
            </Button>
          ) : (
            <Button
              onClick={() => toggleExpand()}
              sx={{
                backgroundColor: "#6A65FF",
                width: "120px",
                height: "30px",
              }}
            >
              <Typography
                sx={{
                  textTransform: "none",
                  fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                  color: "white",
                  fontSize: "14px",
                  width: "fit-content",
                  borderRadius: "5px",
                }}
              >
                {t("ReadMore")}
              </Typography>
            </Button>
          )}
        </Grid2>
      </Grid2>

      <span className="about-info-img"></span>
      <span className="about-info-img-2"></span>
      <span className="about-info-img-3"></span>
    </div>
  )
}

export default About