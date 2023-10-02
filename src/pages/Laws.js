import React from "react";
import NavbarLaw from "./Navbar";
import "./index.css";
import { BsSearch, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function Laws() {
  //--------------------to navigate Home

  let navigate = useNavigate();
  const MoreInfoComponent = (text) => {
    navigate(`/${text}`, { state: "sub" });
  };

  //---------------to change color
  let [col, setcol] = useState("#cccccc");
  const change = () => {
    setcol("#4296f4");
  };
  const notchange = () => {
    setcol("#cccccc");
  };

  //-------list of laws----------------------------------------------------------

  let lawsList = [
    {
      name: "Criminal Code",
      sections: [
        {
          name: "Theft",
          details: "Defines theft and its penalties.",
        },
        {
          name: "Assault",
          details: "Defines assault and its penalties based on severity.",
        },
        {
          name: "Homicide",
          details:
            "Defines different degrees of homicide and penalties associated.",
        },
      ],
    },
    {
      name: "Consumer Protection Act",
      sections: [
        {
          name: "Misleading Advertising",
          details:
            "Regulates false or misleading advertising and its penalties.",
        },
        {
          name: "Product Safety Standards",
          details:
            "Sets safety standards for products and penalties for non-compliance.",
        },
        {
          name: "Consumer Rights",
          details:
            "Enumerates the rights of consumers and mechanisms for their protection.",
        },
      ],
    },
    {
      name: "Environmental Protection Act",
      sections: [
        {
          name: "Air Quality",
          details:
            "Regulates air quality standards and emissions limits for pollutants.",
        },
        {
          name: "Water Pollution",
          details:
            "Sets standards to prevent water pollution and penalties for violations.",
        },
        {
          name: "Waste Management",
          details:
            "Establishes regulations for proper waste disposal and recycling.",
        },
      ],
    },
    {
      name: "Civil Rights Act",
      sections: [
        {
          name: "Equality and Non-Discrimination",
          details:
            "Prohibits discrimination based on race, color, religion, sex, or national origin.",
        },
        {
          name: "Voting Rights",
          details:
            "Protects the right to vote and ensures fair electoral processes.",
        },
        {
          name: "Employment Rights",
          details:
            "Prohibits discrimination in employment based on certain characteristics.",
        },
      ],
    },
    {
      name: "Family and Medical Leave Act",
      sections: [
        {
          name: "Eligibility and Coverage",
          details: "Defines who is eligible for family and medical leave.",
        },
        {
          name: "Leave Entitlement",
          details:
            "Specifies the amount of leave an employee is entitled to and under what circumstances.",
        },
        {
          name: "Job Protection",
          details: "Ensures job protection during the leave period.",
        },
      ],
    },
    {
      name: "Immigration and Nationality Act",
      sections: [
        {
          name: "Visa Types",
          details: "Lists different types of visas and their purposes.",
        },
        {
          name: "Naturalization",
          details:
            "Defines the process and requirements for becoming a naturalized citizen.",
        },
        {
          name: "Deportation",
          details: "Specifies grounds for deportation and the process thereof.",
        },
      ],
    },
    {
      name: "Tax Code",
      sections: [
        {
          name: "Income Tax",
          details: "Lays out the rules and rates for taxing income.",
        },
        {
          name: "Deductions and Credits",
          details: "Explains allowable deductions and tax credits.",
        },
        {
          name: "Corporate Tax",
          details:
            "Details the taxation of corporations and related regulations.",
        },
      ],
    },
    {
      name: "Labor Laws",
      sections: [
        {
          name: "Minimum Wage",
          details: "Sets the minimum wage employers must pay to employees.",
        },
        {
          name: "Working Hours",
          details: "Regulates the maximum working hours and overtime pay.",
        },
        {
          name: "Occupational Health and Safety",
          details:
            "Ensures a safe working environment and outlines safety regulations.",
        },
      ],
    },
    {
      name: "Intellectual Property Laws",
      sections: [
        {
          name: "Patents",
          details:
            "Defines the process for obtaining patents and protecting inventions.",
        },
        {
          name: "Copyright",
          details:
            "Protects original works of authorship and their distribution.",
        },
        {
          name: "Trademarks",
          details:
            "Regulates the use and protection of trademarks for goods and services.",
        },
      ],
    },
    {
      name: "Antitrust Laws",
      sections: [
        {
          name: "Monopoly Prevention",
          details:
            "Prohibits anti-competitive behavior and monopolistic practices.",
        },
        {
          name: "Price Fixing",
          details:
            "Prevents collusion among businesses to fix prices and harm consumers.",
        },
        {
          name: "Mergers and Acquisitions",
          details:
            "Regulates mergers and acquisitions to ensure fair competition.",
        },
      ],
    },
    {
      name: "Privacy Laws",
      sections: [
        {
          name: "Data Protection",
          details:
            "Regulates the collection, use, and protection of personal data.",
        },
        {
          name: "Privacy Rights",
          details:
            "Ensures individuals have rights over their personal information.",
        },
        {
          name: "Online Privacy",
          details:
            "Addresses privacy concerns related to online activities and communications.",
        },
      ],
    },
  ];

  //-------------------Dark and Light Mode ----------

  let [mode, setmode] = useState(true);
  let [bgcol, setbgcol] = useState("white");
  let [txtcol, settxtcol] = useState("#262626");

  const changeBG = () => {
    if (mode == true) {
      setbgcol("#262626");
      settxtcol("white");
      setmode(false);
    } else {
      setbgcol("white");
      settxtcol("#262626");
      setmode(true);
    }
  };

  //-----------Method for redirecting to sections---------

  const ToSubLaw = (val) => {
    localStorage.setItem("mode", `${mode}`);
    navigate("/LawSection", { state: [mode, val.sections, val.name] });
  };

  //---------------------Dom Elements--------------------

  let mainCon = (
    <div style={{ background: bgcol }}>
      <NavbarLaw mode={mode} />{" "}
      <div className="sub-title">
        <p className="path-container">
          <span className="path" onClick={() => MoreInfoComponent("")}>
            Home
          </span>{" "}
          / <span className="path">Laws</span>
        </p>
        <h1>Laws</h1>
      </div>
      <section className="search-container" style={{ background: bgcol }}>
        <div className="search-outer" style={{ borderColor: col }}>
          <input
            onKeyUp={FilterLaws}
            placeholder="search"
            className="search"
            id="search"
            onFocus={change}
            onBlur={notchange}
            style={{ background: bgcol, color: txtcol }}
          />
          <BsSearch id="iconSearch" style={{ color: col }} />
        </div>
        <div>
          <label class="switch">
            <input type="checkbox" onClick={changeBG} />
            <span class="slider"></span>
          </label>
        </div>
      </section>
      <section
        className="Law-columns"
        style={{ background: bgcol, minHeight: "500px" }}
      >
        {lawsList.map((ele, ind) => {
          return (
            <>
              <div key={ind} className="Law-col-item" style={{ color: txtcol }}>
                <h3 onClick={() => ToSubLaw(ele)}>
                  {ele.name} <BsArrowRight className="arrowR" />
                </h3>
              </div>
            </>
          );
        })}
      </section>
      <Footer />
    </div>
  );

  //--------------------Filtering the Laws from search -------------------

  function FilterLaws() {
    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();
    let container = document.getElementsByClassName("Law-columns")[0];
    let eachLaw = container.getElementsByClassName("Law-col-item");
    //---------------iterating through each search element
    let count = 0;
    for (var i = 0; i < eachLaw.length; i++) {
      let a = eachLaw[i].getElementsByTagName("h3")[0];
      let txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        eachLaw[i].style.display = "block";
      } else {
        eachLaw[i].style.display = "none";
      }
      if (eachLaw[i].style.display === "block") {
        count++;
      }
    }
    if (count == 0) {
      setcol("red");
    } else {
      setcol("#4296f4");
    }
  }

  return mainCon;
}
