import React, {useEffect, useState} from "react";
import axios from "axios";

const CollectData = () => {

    const [finalData, setFinalData] = useState([]);

    useEffect(()=>{
        console.log(finalData)
    },[finalData])

    const getTechnology = async()=>{
        const options = {
            method: 'GET',
            url: 'https://jobs-api14.p.rapidapi.com/list',
            params: {
              query: 'technology',
              location: 'United States',
              distance: '1.0',
              language: 'en_GB',
              remoteOnly: 'false',
              datePosted: 'month',
              employmentTypes: 'fulltime;parttime;intern;contractor',
              index: '0'
            },
            headers: {
              'X-RapidAPI-Key': '51a9f17b54msh6a8252f5480b569p114ddfjsn4a4bd4b8456a',
              'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setFinalData(prevState=>[...prevState, response.data.jobs]);
              getHealhcare();

          } catch (error) {
              console.error(error);
          }
    }

    const getHealhcare = async()=>{
        const options = {
            method: 'GET',
            url: 'https://jobs-api14.p.rapidapi.com/list',
            params: {
              query: 'healtcare',
              location: 'United States',
              distance: '1.0',
              language: 'en_GB',
              remoteOnly: 'false',
              datePosted: 'month',
              employmentTypes: 'fulltime;parttime;intern;contractor',
              index: '0'
            },
            headers: {
              'X-RapidAPI-Key': '51a9f17b54msh6a8252f5480b569p114ddfjsn4a4bd4b8456a',
              'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setFinalData(prevState=>[...prevState, response.data.jobs]);
              getFinance();

          } catch (error) {
              console.error(error);
          }
    }

    const getFinance = async()=>{
        const options = {
            method: 'GET',
            url: 'https://jobs-api14.p.rapidapi.com/list',
            params: {
              query: 'Finance',
              location: 'United States',
              distance: '1.0',
              language: 'en_GB',
              remoteOnly: 'false',
              datePosted: 'month',
              employmentTypes: 'fulltime;parttime;intern;contractor',
              index: '0'
            },
            headers: {
              'X-RapidAPI-Key': '51a9f17b54msh6a8252f5480b569p114ddfjsn4a4bd4b8456a',
              'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setFinalData(prevState=>[...prevState, response.data.jobs]);
              getEducation();

          } catch (error) {
              console.error(error);
          }
    }

    const getEducation = async()=>{
        const options = {
            method: 'GET',
            url: 'https://jobs-api14.p.rapidapi.com/list',
            params: {
              query: 'Education',
              location: 'United States',
              distance: '1.0',
              language: 'en_GB',
              remoteOnly: 'false',
              datePosted: 'month',
              employmentTypes: 'fulltime;parttime;intern;contractor',
              index: '0'
            },
            headers: {
              'X-RapidAPI-Key': '51a9f17b54msh6a8252f5480b569p114ddfjsn4a4bd4b8456a',
              'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setFinalData(prevState=>[...prevState, response.data.jobs]);
              getHospitality();
          } catch (error) {
              console.error(error);
          }
    }

    const getHospitality = async()=>{
        const options = {
            method: 'GET',
            url: 'https://jobs-api14.p.rapidapi.com/list',
            params: {
              query: 'Hospitality and Tourism',
              location: 'United States',
              distance: '1.0',
              language: 'en_GB',
              remoteOnly: 'false',
              datePosted: 'month',
              employmentTypes: 'fulltime;parttime;intern;contractor',
              index: '0'
            },
            headers: {
              'X-RapidAPI-Key': '51a9f17b54msh6a8252f5480b569p114ddfjsn4a4bd4b8456a',
              'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setFinalData(prevState=>[...prevState, response.data.jobs]);
              let csv = array.toString();
              console.log(csv);
              saveAs(csv, "data.csv");
          } catch (error) {
              console.error(error);
          }
    }





  const getJobData = async () => {
    const funcs = [getTechnology, getEducation, getHealhcare,getFinance, getHospitality];

    // funcs.forEach(f=>{
    //     setTimeout(()=>{
    //         setFinalData(prevState=>[...prevState, f().jobs])
    //     }, 30000)
    // })
    getTechnology();
  };
  return (
    <div>
      <button onClick={getJobData}>Collect data</button>
    </div>
  );
};

export default CollectData;
