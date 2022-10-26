const FAQ = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className="py-8 ">
        <div className="container mx-auto">
          <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
            <h2 className="text-2xl font-bold leading-none sm:text-4xl">
              Creative Live FAQs
            </h2>
            <p className="px-8 my-4">
              Creative Live's Frequently Asked Questions page is a central hub
              where its customers can always go to with their most common
              questions. These are the 4 most popular questions Creative Live
              receives.
            </p>
          </div>
          <div className="grid grid-cols-5 p-4 md:p-8">
            <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
              <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  ></path>
                </svg>
                <h5 className="text-xl font-semibold">
                  Check for a second Creative Live account
                </h5>
                <p>
                  If you've signed in to Creative Live with different email
                  addresses, you may have accidentally made multiple accounts.
                  To check for another account with a different email address:
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  ></path>
                </svg>
                <h5 className="text-xl font-semibold">Specializations</h5>
                <p>
                  A Creative Live Specialization is a series of related courses
                  designed to help you master a specific topic. Some shorter
                  Specializations include as few as three courses and only take
                  a few months to finish. Longer Specializations can include ten
                  or more courses and take up to a year.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  ></path>
                </svg>
                <h5 className="text-xl font-semibold">Video translations</h5>
                <p>
                  To see translated subtitles for a video, turn subtitles on and
                  choose the language you want to see subtitles in. You can see
                  what languages are available for a course by checking the
                  course's description page. If a language is listed, that means
                  at least 80\% of the course's video subtitles have been
                  translated. When you search for courses, you can filter your
                  search to find courses that have translations in certain
                  languages.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6  text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <h5 className="text-xl font-semibold">Math assignments</h5>
                <p>
                  Math assignments are quizzes that allow you to enter math
                  functions and certain constants. Before you submit your
                  assignment, you'll be able to preview your answer to see what
                  the grader will see. You can use basic symbols for addition
                  (+), subtraction (-), multiplication (*), division (/), and
                  power/exponential (^).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
