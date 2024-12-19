const BLUR_FADE_DELAY = 0.04;

// import data from "../../content/sitetext.json";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import data from "../..//content/sitetext.json";

// export const SkillSection = () => {
//   return (
//     <div className="container py-4">
//       {/* <BlurFade delay={0.25} inView>
//         <h1 className="text-center text-3xl font-light">
//           <span className="font-bold">Skills</span> &
//           <span className="font-bold"> Education </span>🧑‍🎓
//         </h1>
//       </BlurFade> */}
//       {/* <section id="about">
//         <BlurFade delay={BLUR_FADE_DELAY * 3}>
//           <h2 className="text-xl font-bold">About</h2>
//         </BlurFade>
//         <BlurFade delay={BLUR_FADE_DELAY * 4}>
//           <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
//             {DATA.summary}
//           </Markdown>
//         </BlurFade>
//       </section> */}
//       <section id="work">
//         <div className="flex min-h-0 flex-col gap-y-3">
//           <BlurFade delay={BLUR_FADE_DELAY * 5}>
//             <h2 className="text-xl font-bold">Work Experience</h2>
//           </BlurFade>
//           {DATA.work.map((work, id) => (
//             <BlurFade
//               key={work.company}
//               delay={BLUR_FADE_DELAY * 6 + id * 0.05}
//             >
//               <ResumeCard
//                 key={work.company}
//                 logoUrl={work.logoUrl}
//                 altText={work.company}
//                 title={work.company}
//                 subtitle={work.title}
//                 href={work.href}
//                 badges={work.badges}
//                 period={`${work.start} - ${work.end ?? "Present"}`}
//                 description={work.description}
//               />
//             </BlurFade>
//           ))}
//         </div>
//       </section>
//       <section id="education">
//         <div className="flex min-h-0 flex-col gap-y-3">
//           <BlurFade delay={BLUR_FADE_DELAY * 7}>
//             <h2 className="text-xl font-bold">Education</h2>
//           </BlurFade>
//           {DATA.education.map((education, id) => (
//             <BlurFade
//               key={education.school}
//               delay={BLUR_FADE_DELAY * 8 + id * 0.05}
//             >
//               <ResumeCard
//                 key={education.school}
//                 href={education.href}
//                 logoUrl={education.logoUrl}
//                 altText={education.school}
//                 title={education.school}
//                 subtitle={education.degree}
//                 period={`${education.start} - ${education.end}`}
//               />
//             </BlurFade>
//           ))}
//         </div>
//       </section>
//       <section id="skills">
//         <div className="flex min-h-0 flex-col gap-y-3">
//           <BlurFade delay={BLUR_FADE_DELAY * 9}>
//             <h2 className="text-xl font-bold">Skills</h2>
//           </BlurFade>
//           <div className="flex flex-wrap gap-1">
//             {DATA.skills.map((skill, id) => (
//               <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
//                 <Badge key={skill}>{skill}</Badge>
//               </BlurFade>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

export const SkillSection = () => {
  return (
    <div className="container max-w-screen-md">
      <BlurFade delay={BLUR_FADE_DELAY * 10 + 0 * 0.05}>
        <h3 className="mb-2 font-bold">Technologies and Skills</h3>
      </BlurFade>
      <div className="flex flex-wrap gap-1">
        {data.skills.map((skill, id) => (
          <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + (id + 1) * 0.05}>
            <Badge key={skill}>{skill}</Badge>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};
