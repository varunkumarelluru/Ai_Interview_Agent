import dayjs from 'dayjs';
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DisplayTechIcons from "@/components/DisplayTechIcons";

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');

  return (
    <div className="w-[360px] max-sm:w-full min-h-80 rounded-xl p-4 bg-gradient-to-br from-[#1f1f2e] to-[#12121a] shadow-xl text-white relative flex flex-col justify-between">
      
      {/* Badge top right */}
      <div className="absolute top-0 right-0 px-3 py-1.5 rounded-bl-lg bg-light-600">
        <p className="badge-text text-sm capitalize">{normalizedType}</p>
      </div>

      {/* Top Content */}
      <div>
        <Image
          src={getRandomInterviewCover()}
          alt="cover image"
          width={64}
          height={64}
          className="rounded-full object-cover size-[64px]"
        />

        <h3 className="mt-4 font-semibold text-base capitalize">
          {role} Interview
        </h3>

        <div className="flex gap-4 mt-2 text-sm text-gray-300">
          <div className="flex items-center gap-1.5">
            <Image src="/calendar.svg" alt="calendar" width={18} height={18} />
            <p>{formattedDate}</p>
          </div>

          <div className="flex items-center gap-1.5">
            <Image src="/star.svg" alt="star" width={18} height={18} />
            <p>{feedback?.totalScore ?? '---'}/100</p>
          </div>
        </div>

        <p className="line-clamp-2 mt-4 text-sm text-gray-400">
          {feedback?.finalAssessment ||
            "You haven't taken the interview yet. Take it now to improve your skills."}
        </p>
      </div>

      {/* Bottom Row: Tech Icons and Button */}
      <div className="flex items-center justify-between mt-5">
        <DisplayTechIcons techStack={techstack} />

        <Link
          href={feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`}
          passHref
        >
          <Button className="bg-[#b5b3f3] text-black rounded-full px-4 py-2 text-sm hover:bg-[#a7a5e0] transition-colors duration-200">
            View interview
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InterviewCard;
