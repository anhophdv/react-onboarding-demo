import { Box, Grid } from "@mui/material";
import { AppColorConstants } from "../../utils/AppConstants";
import { BCard, IPerson, ISocialInfo } from "../../components/bCard/BCard";

export default function AppContainer() {
  const socialInfo: ISocialInfo = {
    email: "an.ho@yum.com",
    linkedInUrl: "https://www.linkedin.com/",
    twitterUrl: "https://twitter.com/",
    fbUrl: "https://www.facebook.com/",
    instagramUrl: "https://www.instagram.com/",
    githubUrl: "https://github.com/",
  };
  const person1: IPerson = {
    id: 1,
    firstName: "Laura",
    lastName: "Smith",
    avatarURL: "../../assets/images/ic_man.png",
    job: "Frontend Developer",
    department: "Mobile Team",
    twitterURL: "https://google.com",
    fbURL: "https://facebook.com",
    instagramURL: "https://google.com",
    linkedInURL: "https://google.com",
    aboutDescription:
      "Hi, my name is Rick Blyth and I'm a software developer, entrepreneur, founder, blogger and father. I quit my (well paid but crappy) 9-5 job a few years back after building and scaling a few bootstrapped Micro SaaS apps. I was able to resign with confidence knowing I had built a good runway and had a growing, recurring subscription income each month 📈 Eventually, I went on to make over $500,000 from my Micro SaaS apps through the subscription income and cash lump sum I received when I sold and exited. Now, I'm passionate about helping other software developers get started building their own profitable Micro SaaS apps 🚀",
    interestDescription:
      "My main experience is with bootstrapped Micro SaaS, it's what I'm passionate about. So, you won't find me talking too much about big SaaS, because: 1) I don't have much experience in multi-series funding and working venture capitalists. 2) 99% of developers are more interested in starting something that they control, with zero outside funding that they can grow themselves. This is commonly referred to as bootstrapping. In addition to Micro SaaS, I'll also be covering topics such as Passive Income, Side Hustles, Quit Your Job, Chrome Extensions & Productivity.",
    socialInfo: socialInfo,
  };

  const socialInfoWithoutEmail: ISocialInfo = {
    linkedInUrl: "https://www.linkedin.com/",
    twitterUrl: "https://twitter.com/",
    fbUrl: "https://www.facebook.com/",
    instagramUrl: "https://www.instagram.com/",
    githubUrl: "https://github.com/",
  };
  const person2: IPerson = {
    id: 2,
    firstName: "Andrew",
    lastName: "Ayeew",
    avatarURL: "../../assets/images/ic_woman.png",
    job: "PHP Developer",
    department: "Mobile Team",
    twitterURL: "https://google.com",
    fbURL: "https://facebook.com",
    instagramURL: "https://google.com",
    linkedInURL: "https://google.com",
    aboutDescription:
      "Hi, my name is Rick Blyth and I'm a software developer, entrepreneur, founder, blogger and father. I quit my (well paid but crappy) 9-5 job a few years back after building and scaling a few bootstrapped Micro SaaS apps. I was able to resign with confidence knowing I had built a good runway and had a growing, recurring subscription income each month 📈 Eventually, I went on to make over $500,000 from my Micro SaaS apps through the subscription income and cash lump sum I received when I sold and exited. Now, I'm passionate about helping other software developers get started building their own profitable Micro SaaS apps 🚀",
    interestDescription:
      "My main experience is with bootstrapped Micro SaaS, it's what I'm passionate about. So, you won't find me talking too much about big SaaS, because: 1) I don't have much experience in multi-series funding and working venture capitalists. 2) 99% of developers are more interested in starting something that they control, with zero outside funding that they can grow themselves. This is commonly referred to as bootstrapping. In addition to Micro SaaS, I'll also be covering topics such as Passive Income, Side Hustles, Quit Your Job, Chrome Extensions & Productivity.",
    socialInfo: socialInfoWithoutEmail,
  };
  const people: IPerson[] = [person1, person2];

  const gridPadding = { xs: 2, sm: 2, lg: 10, xlg: 10 };

  return (
    <Box
      display={"flex"}
      sx={{
        flexGrow: 1,
        bgcolor: AppColorConstants.BG_COLOR_APP,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 2, lg: 5 }}
        sx={{
          flex: 1,
          bgcolor: AppColorConstants.BG_COLOR_APP,
          flexGrow: 1,
          paddingX: gridPadding,
          paddingY: gridPadding,
        }}
      >
        {people.map((value, _) => (
          <Grid item xs={6} key={value.id}>
            <BCard
              id={value.id}
              firstName={value.firstName}
              lastName={value.lastName}
              avatarURL={value.avatarURL}
              job={value.job}
              department={value.department}
              twitterURL={value.twitterURL}
              fbURL={value.fbURL}
              instagramURL={value.instagramURL}
              linkedInURL={value.linkedInURL}
              aboutDescription={value.aboutDescription ?? ""}
              interestDescription={value.interestDescription ?? ""}
              socialInfo={value.socialInfo}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
