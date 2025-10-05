import React from "react";
import { useNavigate } from "react-router-dom";

const RulesAndRegulations = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 uppercase">
          Rules & Regulations / Code of Conduct
        </h1>

        {/* PREAMBLE */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Preamble</h2>
          <p className="text-gray-700 leading-relaxed">
            I-GCC exists as a bilateral chamber that provides the platform and network 
            to promote trade and investment between the Republic of Ireland and the 
            Republic of Ghana. The Chamber offers professional, business, and trade 
            services for members to grow their business interests.
          </p>
        </section>

        {/* CODE OF CONDUCT */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Code of Conduct
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Having been admitted to Membership of I-GCC, I/we pledge to work in support 
            of the realization of the Chamber’s objectives, and to abide by its code of 
            conduct as follows:
          </p>

          <ol className="list-decimal ml-5 space-y-3 text-gray-700 leading-relaxed">
            <li>
              Uphold high ethical standards and best practices in the conduct of business,
              trade and investment through the Chamber.
            </li>
            <li>
              Ensure compliance and abide by all relevant laws and requirements within 
              the regulatory space of both Ghana and Ireland.
            </li>
            <li>
              Be accountable to our stakeholders, including employees, investors, suppliers 
              and customers by:
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Respecting their human rights</li>
                <li>
                  Ensuring equality relating to race, age, gender, religion, physical state, etc.
                </li>
              </ul>
            </li>
            <li>
              Maintain confidentiality in all internal matters pertaining to the chamber 
              and its members. I/we agree that divulging internal information requires 
              consent from the Executive Council through the Country Secretariat.
            </li>
            <li>
              Fully participate and contribute to all member events, capacity building 
              functions and activities of the I-GCC.
            </li>
            <li>
              Ensure that My/Our registered company shall not, knowingly engage, either 
              directly or indirectly, in any corrupt business practices, bribery and illegal 
              influence for undue business favours contrary to the laws and requirements 
              of trade and investment regulations of Ghana and Ireland.
            </li>
          </ol>
        </section>

        {/* DECLARATION */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Declaration</h2>
          <p className="text-gray-700 leading-relaxed">
            I/We pledge to abide by all clauses contained in this Code of Conduct, 
            and understand that indulgence in any corrupt, bribery and fraudulent 
            practices, human rights abuse or discrimination in any form, may result 
            in the suspension or termination of my company’s membership from the Chamber.
          </p>
        </section>

        {/* BACK BUTTON */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Back to Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulesAndRegulations;
