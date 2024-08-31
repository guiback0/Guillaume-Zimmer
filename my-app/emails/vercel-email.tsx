import { VercelIcon } from "@/public/icons/VercelIcon";
import {
   Body,
   Container,
   Head,
   Heading,
   Hr,
   Html,
   Link,
   Preview,
   Section,
   Text,
   Tailwind,
} from "@react-email/components";

interface VercelInviteUserEmailProps {
   message?: string;
   email?: string;
}

const baseUrl = process.env.VERCEL_URL
   ? `https://${process.env.VERCEL_URL}`
   : "";

export const VercelEmail = ({
   message,
   email,
}: VercelInviteUserEmailProps) => {
   const previewText = `Guillaume vous avez un email...`;

   return (
      <Html>
         <Head />
         <Preview>{previewText}</Preview>
         <Tailwind>
            <Body className="bg-white my-auto mx-auto font-sans px-2">
               <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                  <Section className="mt-[32px]">
                     <div className="flex justify-center items-center">
                        <VercelIcon size={42} />
                     </div>
                  </Section>
                  <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                     <strong>Guillaume</strong>, vous venez de recevoir un mail
                     de{" "}
                     <Link
                        href={`mailto:${email}`}
                        className="text-blue-600 no-underline">
                        {email}
                     </Link>
                  </Heading>
                  <Text className="text-black text-[14px] leading-[24px]">
                  {message}
                  </Text>
                  <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
               </Container>
            </Body>
         </Tailwind>
      </Html>
   );
};



