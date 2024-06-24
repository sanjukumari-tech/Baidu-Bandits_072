  
  import React, { useState } from 'react';
  import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
  import checked from "../assets/ticks/checked.png";
  import select from "../assets/ticks/select.png";
  
 



const mentalHealthFitnessTopics = JSON.parse(localStorage.getItem("topic"))||[
    {
      read:true,
      title: "Exercise",
      para1: "Regular exercise is essential for maintaining optimal mental health. Physical activity reduces stress hormones like cortisol and stimulates the production of endorphins, which are natural mood elevators. Exercise also promotes better sleep patterns, enhances cognitive function, and improves overall well-being. Engaging in aerobic exercises, strength training, and flexibility workouts supports cardiovascular health and muscular strength while boosting mental resilience and emotional well-being.",
      para2: "Incorporating exercise into daily routines contributes to long-term mental fitness by reducing symptoms of anxiety and depression. Physical activity not only enhances physical health but also provides opportunities for social interaction, fostering supportive relationships and enhancing life satisfaction. By prioritizing regular exercise, individuals can manage stress effectively, improve mood regulation, and maintain a balanced lifestyle."
    },
    {
      read:false,
      title: "Nutrition",
      para1: "Nutrition plays a crucial role in mental health by influencing brain function and neurotransmitter production. Consuming a balanced diet rich in essential nutrients, such as omega-3 fatty acids, vitamins, minerals, and antioxidants, supports cognitive function, mood stability, and emotional well-being. Healthy eating habits contribute to optimal brain health and enhance the body's ability to cope with stress and anxiety.",
      para2: "Adopting a nutritious diet involves incorporating whole foods such as fruits, vegetables, lean proteins, and whole grains while minimizing processed foods, sugars, and unhealthy fats. Proper hydration also supports cognitive performance and mental clarity. Nutritional interventions, including dietary supplements under professional guidance, complement mental health treatments and promote overall well-being. By prioritizing nutrition, individuals can optimize mental fitness, improve mood regulation, and sustain long-term health."
    },
    {
      read:false,
      title: "Mindfulness",
      para1: "Mindfulness practices cultivate mental well-being by promoting present-moment awareness and acceptance of thoughts and feelings. Techniques like meditation, deep breathing exercises, and mindful movement reduce stress levels, enhance emotional resilience, and improve overall psychological health. Mindfulness-based interventions, such as Mindfulness-Based Stress Reduction (MBSR) and Mindfulness-Based Cognitive Therapy (MBCT), teach skills that support effective coping mechanisms and reduce symptoms of anxiety, depression, and chronic pain.",
      para2: "Incorporating mindfulness into daily routines enhances mental clarity and emotional regulation. Mindfulness techniques empower individuals to respond to stressors with greater resilience and compassion, fostering positive relationships and improving overall life satisfaction. By developing mindfulness skills, individuals can strengthen self-awareness, cultivate inner peace, and enhance their ability to navigate life's challenges with mindfulness and resilience."
    },
    {
      read:false,
      title: "Sleep",
      para1: "Quality sleep is fundamental for mental health as it supports cognitive function, memory consolidation, and emotional regulation. During sleep, the brain processes information, strengthens neural connections, and removes toxins accumulated throughout the day, promoting optimal brain health and mental clarity. Adequate sleep also plays a crucial role in regulating mood, reducing stress levels, and enhancing overall well-being.",
      para2: "Establishing healthy sleep habits involves maintaining a consistent sleep schedule, creating a relaxing bedtime routine, and optimizing sleep environment. Addressing sleep disorders such as insomnia and sleep apnea through evidence-based treatments like Cognitive Behavioral Therapy for Insomnia (CBT-I) and continuous positive airway pressure (CPAP) therapy can significantly improve sleep quality and enhance mental health outcomes. By prioritizing sleep hygiene, individuals can support their mental fitness, improve overall well-being, and enhance quality of life."
    },
    {
      read:false,
      title: "Social Connections",
      para1: "Social connections are vital for mental well-being as they provide emotional support, reduce feelings of loneliness, and promote a sense of belonging. Meaningful relationships enhance mood regulation, increase resilience to stress, and improve overall life satisfaction. Social interactions stimulate brain function, foster empathy, and contribute to a positive outlook on life.",
      para2: "Building and maintaining social connections involve nurturing relationships with family, friends, colleagues, and community members. Engaging in social activities, participating in group events, and joining clubs or organizations foster social bonds and support networks. Prioritizing meaningful connections and open communication strengthens social ties, reduces the impact of stressors, and enhances mental health outcomes. By cultivating social relationships, individuals can improve emotional well-being, build resilience, and achieve greater overall life satisfaction."
    },
    {
      read:false,
      title: "Stress Management",
      para1: "Effective stress management is essential for maintaining mental health and emotional well-being. Chronic stress can negatively impact physical health, cognitive function, and psychological resilience, increasing the risk of anxiety, depression, and burnout. Techniques such as relaxation exercises, mindfulness meditation, and stress-reducing activities help lower stress hormones, reduce blood pressure, and promote the relaxation response.",
      para2: "Incorporating stress reduction techniques into daily routines empowers individuals to cope with stressors effectively, improve emotional regulation, and enhance overall quality of life. Stress management interventions, including cognitive-behavioral therapy (CBT), stress inoculation training, and time management strategies, equip individuals with skills to manage stressors, build resilience, and maintain mental fitness. By prioritizing stress management strategies, individuals can enhance their ability to respond to challenges, cultivate inner peace, and sustain optimal mental health."
    },
    {
      read:false,
      title: "Nature and Mental Health",
      para1: "Spending time in nature has profound benefits for mental health. Outdoor activities, such as hiking, gardening, and nature walks, reduce stress levels and promote relaxation. Exposure to natural environments enhances mood, improves concentration, and boosts feelings of well-being. Nature also provides opportunities for physical activity and social interaction, contributing to overall mental fitness and emotional resilience.",
      para2: "Connecting with nature supports mental health by reducing symptoms of anxiety, depression, and mood disorders. Green spaces and natural landscapes offer therapeutic effects that calm the mind and rejuvenate the spirit. Incorporating nature-based activities into daily routines enhances life satisfaction and promotes a sense of connection to the environment. By embracing nature, individuals can enhance their mental well-being, reduce stress, and improve overall quality of life."
    },
    {
      read:false,
      title: "Creativity and Mental Wellness",
      para1: "Engaging in creative activities positively impacts mental wellness. Creative expression through art, music, writing, or crafts promotes emotional expression, stress relief, and self-discovery. Creative pursuits stimulate cognitive function, enhance problem-solving skills, and foster a sense of accomplishment and self-efficacy. Art therapy and creative workshops provide therapeutic benefits by channeling emotions and promoting mindfulness.",
      para2: "Incorporating creativity into daily life nurtures mental wellness by reducing symptoms of anxiety, depression, and trauma. Creative outlets offer a safe space for self-reflection and personal growth, supporting emotional resilience and improving overall psychological health. Embracing creativity as a form of self-care enhances mood regulation, boosts self-confidence, and cultivates a positive outlook on life. By engaging in creative pursuits, individuals can enhance their mental well-being and experience greater fulfillment."
    },
    {
      read:false,
      title: "Positive Psychology",
      para1: "Positive psychology focuses on strengths, virtues, and factors that contribute to a fulfilling life. Practices such as gratitude journaling, positive affirmations, and acts of kindness promote optimism, resilience, and emotional well-being. Positive psychology interventions aim to enhance happiness, improve life satisfaction, and foster a positive mindset through evidence-based techniques.",
      para2: "Incorporating positive psychology into daily routines supports mental health by cultivating a mindset of gratitude, hope, and resilience. Techniques like mindfulness, character strengths assessment, and goal setting empower individuals to thrive and flourish. Positive psychology interventions are beneficial for reducing stress, managing adversity, and enhancing overall psychological health. By embracing positive psychology principles, individuals can lead more meaningful lives and achieve greater emotional well-being."
    },
    {
      read:false,
        title: "Emotional Resilience",
        para1: "Emotional resilience refers to the ability to adapt and bounce back from adversity. It involves developing coping strategies, managing emotions effectively, and maintaining a positive outlook during challenging times. Building emotional resilience fosters mental strength, improves stress management skills, and enhances overall well-being.",
        para2: "Developing emotional resilience involves cultivating self-awareness, practicing mindfulness, and nurturing supportive relationships. Strategies such as cognitive reframing, problem-solving, and seeking social support help individuals navigate stressors and setbacks with resilience. Enhancing emotional resilience promotes adaptive coping mechanisms, reduces the impact of stress on mental health, and supports long-term emotional well-being."
      },
      {
        read:false,
        title: "Cognitive Fitness",
        para1: "Cognitive fitness encompasses mental processes such as attention, memory, reasoning, and problem-solving abilities. Maintaining cognitive fitness involves engaging in activities that challenge the brain, such as puzzles, learning new skills, and mental exercises. Cognitive stimulation supports brain health, enhances neuroplasticity, and reduces the risk of cognitive decline.",
        para2: "Incorporating cognitive activities into daily routines promotes mental agility and sharpens cognitive abilities across the lifespan. Lifelong learning, reading, and participating in intellectual discussions stimulate cognitive function and improve memory retention. Adopting healthy lifestyle habits, including regular physical exercise and balanced nutrition, supports cognitive fitness and enhances overall brain health. By prioritizing cognitive stimulation, individuals can optimize mental acuity, preserve cognitive function, and promote lifelong brain wellness."
      },
      {
        read:false,
        title: "Self-Care Practices",
        para1: "Self-care practices involve activities that promote physical, emotional, and mental well-being. Taking time for self-care enhances stress management, improves mood regulation, and fosters a sense of self-worth and personal fulfillment. Self-care encompasses various activities, such as relaxation techniques, leisure pursuits, and setting boundaries to prioritize individual needs.",
        para2: "Incorporating self-care practices into daily routines supports overall wellness and resilience. Engaging in self-care rituals, such as mindfulness exercises, spa treatments, or hobbies, promotes relaxation and rejuvenation. Prioritizing self-care enhances emotional balance, reduces burnout, and improves quality of life. By nurturing self-care habits, individuals can sustain mental health, increase self-compassion, and cultivate a positive self-image.",
    },
    {
      read:false,
      title: "Digital Detox",
      para1: "A digital detox involves intentionally disconnecting from electronic devices and digital platforms to reduce screen time and promote mental well-being. Limiting exposure to screens and social media can alleviate stress, improve sleep quality, and enhance focus and productivity. Taking breaks from technology encourages mindfulness, reduces information overload, and fosters real-world connections.",
      para2: "Incorporating digital detox practices supports mental health by reducing digital distractions and promoting balance in daily life. Strategies such as setting boundaries for device use, scheduling screen-free activities, and engaging in outdoor pursuits promote relaxation and rejuvenation. Disconnecting from technology allows individuals to recharge mentally, cultivate present-moment awareness, and strengthen interpersonal relationships. By embracing digital detox habits, individuals can enhance mental clarity, reduce stress levels, and achieve a healthier digital balance.",
    },
    {
      read:false,
      title: "Work-Life Balance",
      para1: "Work-life balance involves prioritizing personal well-being alongside professional responsibilities. Maintaining a balance between work commitments, family time, and personal interests promotes overall life satisfaction and reduces stress. Strategies such as time management, setting boundaries, and delegating tasks help achieve harmony between career and personal life.",
      para2: "Creating a healthy work-life balance supports mental health by preventing burnout, improving productivity, and enhancing relationships. Taking breaks, pursuing hobbies, and spending quality time with loved ones foster emotional resilience and improve well-being. Prioritizing self-care and setting realistic expectations promote work-life harmony, allowing individuals to thrive professionally and enjoy fulfilling personal lives. By embracing work-life balance, individuals can achieve greater happiness, reduce stress levels, and sustain overall well-being."
    },
    {read:false,

      title: "Physical Wellness",
      para1: "Physical wellness encompasses maintaining a healthy body through nutrition, exercise, and preventive healthcare. Adopting habits such as regular physical activity, balanced nutrition, and adequate sleep supports physical fitness and overall well-being. Physical wellness enhances energy levels, promotes longevity, and reduces the risk of chronic diseases.",
      para2: "Incorporating physical wellness practices into daily routines supports mental health by boosting mood, improving cognitive function, and reducing stress levels. Engaging in activities such as yoga, cardio workouts, and strength training enhances physical resilience and mental clarity. Prioritizing preventive healthcare, including regular check-ups and vaccinations, promotes overall wellness and supports a healthy lifestyle. By nurturing physical wellness, individuals can optimize health outcomes, increase vitality, and achieve a balanced life."
    },
    {
      read:false,
      title: "Financial Wellness",
      para1: "Financial wellness refers to maintaining financial stability and security. It involves managing finances effectively, setting financial goals, and planning for future expenses. Achieving financial wellness reduces financial stress, enhances peace of mind, and supports overall well-being.",
      para2: "Practicing financial wellness strategies, such as budgeting, saving, and investing wisely, promotes financial security and resilience. Understanding personal finances, seeking financial advice, and making informed financial decisions contribute to long-term financial health. Prioritizing financial wellness fosters confidence, reduces anxiety about money matters, and improves overall quality of life. By cultivating financial literacy and adopting prudent financial habits, individuals can achieve financial independence and sustain well-being."
    },
    {
      read:false,
      title: "Time Management",
      para1: "Time management involves prioritizing tasks, setting goals, and efficiently allocating time for work, leisure, and personal activities. Effective time management skills enhance productivity, reduce procrastination, and improve work-life balance. Strategies such as creating schedules, setting deadlines, and minimizing distractions optimize time use and promote efficiency.",
      para2: "Implementing time management techniques supports mental health by reducing stress levels and increasing focus and productivity. Prioritizing tasks, delegating responsibilities, and using time-blocking methods improve time management skills. Balancing work commitments with leisure activities and self-care promotes overall well-being and prevents burnout. By mastering time management strategies, individuals can achieve goals effectively, enhance work performance, and maintain a healthy lifestyle."
    },
    {
      read:false,
      title: "Emotional Intelligence",
      para1: "Emotional intelligence (EI) refers to the ability to perceive, understand, and manage emotions effectively. Developing EI involves recognizing emotional cues, empathizing with others, and regulating one's own emotions in different situations. Emotional intelligence enhances interpersonal relationships, improves communication skills, and fosters resilience.",
      para2: "Enhancing emotional intelligence supports mental health by promoting self-awareness, empathy, and effective stress management. Practicing EI skills, such as active listening, conflict resolution, and emotional self-control, strengthens emotional resilience and enhances decision-making abilities. Building emotional intelligence fosters positive interactions, reduces misunderstandings, and promotes collaborative teamwork. By cultivating emotional intelligence, individuals can improve relationship dynamics, navigate challenges with resilience, and achieve personal growth."
    },{
      read:false,
        title: "Hydration",
        para1: "Hydration is crucial for maintaining optimal physical and mental health. Drinking an adequate amount of water supports cognitive function, regulates body temperature, and promotes detoxification. Proper hydration improves mood, concentration, and overall energy levels. Dehydration can lead to symptoms such as headaches, fatigue, and reduced mental clarity.",
        para2: "Incorporating hydration into daily routines involves drinking water regularly throughout the day. Monitoring fluid intake based on individual needs, climate, and physical activity levels ensures proper hydration. Consuming hydrating foods such as fruits and vegetables also contributes to overall hydration. By prioritizing hydration, individuals can support mental alertness, enhance physical performance, and maintain overall well-being."
      },
      {
        read:false,
        title: "Resilience Building",
        para1: "Resilience building involves developing adaptive coping strategies and psychological strengths to navigate challenges effectively. Building resilience enhances emotional well-being, promotes mental toughness, and fosters personal growth. Resilient individuals can bounce back from setbacks, manage stressors, and maintain a positive outlook during difficult times.",
        para2: "Cultivating resilience involves cultivating self-awareness, fostering social support networks, and practicing mindfulness. Learning from past experiences, setting realistic goals, and maintaining a sense of purpose contribute to resilience. Building resilience skills strengthens emotional resilience, enhances problem-solving abilities, and improves overall quality of life. By prioritizing resilience-building practices, individuals can navigate life's challenges with resilience and maintain psychological well-being."
      },
      {
        read:false,
        title: "Workout Variety",
        para1: "Incorporating workout variety into fitness routines enhances physical and mental health benefits. Engaging in diverse exercises, such as cardio, strength training, flexibility, and balance workouts, targets different muscle groups, improves overall fitness, and prevents exercise plateau. Varying workouts reduces boredom, increases motivation, and promotes adherence to fitness goals.",
        para2: "Integrating workout variety promotes holistic fitness by challenging the body in different ways and preventing overuse injuries. Cross-training, trying new fitness classes, and alternating workout intensities optimize fitness gains and improve exercise enjoyment. Adjusting workout routines based on fitness levels, preferences, and goals enhances physical performance and mental well-being. By embracing workout variety, individuals can maximize fitness outcomes, sustain motivation, and achieve long-term health benefits."
      },
      {
        read:false,
        title: "Laughter Therapy",
        para1: "Laughter therapy involves using humor and laughter to promote mental and emotional well-being. Laughter triggers the release of endorphins, natural mood-boosting chemicals, which reduce stress hormones and promote relaxation. Laughter therapy improves mood, enhances immune function, and supports overall cardiovascular health.",
        para2: "Incorporating laughter therapy into daily life involves engaging in activities that induce laughter, such as watching comedies, sharing jokes, or participating in laughter yoga sessions. Laughter promotes social bonding, boosts resilience to stress, and enhances emotional resilience. Practicing laughter therapy fosters a positive outlook, reduces anxiety, and improves quality of life. By prioritizing humor and laughter, individuals can enhance mental health, strengthen relationships, and experience joy."
      },
      {read:false,
        title: "Mind-Body Connection",
        para1: "The mind-body connection refers to the link between mental and physical health, where psychological factors influence physical well-being and vice versa. Strengthening the mind-body connection involves practices such as yoga, tai chi, and meditation, which promote relaxation, reduce stress, and improve overall health. Mind-body techniques enhance emotional resilience, support pain management, and improve quality of life.",
        para2: "Incorporating mind-body practices into daily routines fosters holistic health by promoting relaxation response and reducing cortisol levels. Mindfulness meditation, deep breathing exercises, and progressive muscle relaxation techniques enhance mind-body awareness and improve emotional regulation. Strengthening the mind-body connection supports mental clarity, enhances immune function, and optimizes overall well-being. By nurturing the mind-body connection, individuals can achieve balance, reduce symptoms of stress-related disorders, and sustain long-term health."
      },
      {
        read:false,
        title: "Visualization Techniques",
        para1: "Visualization techniques involve mentally picturing positive outcomes, goals, or experiences to enhance motivation, performance, and well-being. Visualization activates the brain's neural networks associated with goal attainment and stimulates positive emotions. Using imagery to visualize success, relaxation, or healing promotes mental rehearsal, reduces anxiety, and improves self-confidence.",
        para2: "Incorporating visualization into daily routines involves creating vivid mental images of desired outcomes or scenarios. Guided imagery sessions, visualization exercises, and creative visualization techniques enhance mental focus and concentration. Practicing visualization techniques before challenging tasks or events prepares the mind for success and enhances performance. Visualization supports goal achievement, boosts resilience, and fosters a positive mindset. By harnessing the power of visualization, individuals can optimize mental and emotional well-being, improve self-esteem, and achieve personal growth."
      },
      {
        read:false,
        title: "Breathwork",
        para1: "Breathwork involves intentional breathing techniques that promote relaxation, stress reduction, and mental clarity. Deep breathing exercises, such as diaphragmatic breathing and box breathing, activate the parasympathetic nervous system, which calms the body's stress response. Breathwork improves oxygenation, enhances focus, and supports emotional regulation.",
        para2: "Incorporating breathwork into daily practices involves practicing mindful breathing exercises during meditation, yoga, or moments of stress. Breathing techniques like alternate nostril breathing and 4-7-8 breathing patterns promote relaxation and improve respiratory function. Utilizing breathwork enhances self-awareness, reduces anxiety, and supports overall mental well-being. Prioritizing breathwork techniques empowers individuals to manage stress effectively, enhance relaxation response, and cultivate inner peace. By integrating breathwork into daily routines, individuals can optimize mental clarity, improve emotional resilience, and achieve holistic well-being."
      },
      {read:false,

        title: "Cognitive Behavioral Therapy (CBT)",
        para1: "Cognitive Behavioral Therapy (CBT) is a therapeutic approach that helps individuals identify and change negative thought patterns and behaviors. CBT focuses on understanding how thoughts and beliefs influence emotions and actions. By learning cognitive restructuring and behavior modification techniques, individuals can improve coping skills, reduce symptoms of anxiety and depression, and enhance overall well-being.",
        para2: "Incorporating CBT strategies involves setting specific goals, challenging cognitive distortions, and practicing relaxation techniques. CBT interventions, such as exposure therapy and cognitive restructuring, help individuals manage stress, overcome fears, and improve problem-solving abilities. Implementing CBT techniques empowers individuals to develop adaptive coping strategies, build resilience, and achieve long-term mental health goals. By embracing CBT principles, individuals can transform negative thinking patterns, enhance emotional well-being, and lead fulfilling lives."
      },
      {
        read:false,
        title: "Gratitude Practice",
        para1: "Gratitude practice involves cultivating appreciation for positive aspects of life, which promotes mental well-being and emotional resilience. Practicing gratitude enhances mood, reduces stress levels, and improves overall life satisfaction. Regularly acknowledging blessings and expressing gratitude fosters positive emotions, enhances social relationships, and supports mental health.",
        para2: "Incorporating gratitude into daily routines involves keeping a gratitude journal, expressing thanks to others, or reflecting on moments of gratitude. Gratitude exercises, such as writing thank-you notes or focusing on small pleasures, promote a positive outlook and increase resilience to stress. Cultivating a gratitude mindset enhances emotional well-being, reduces symptoms of depression, and improves self-esteem. By prioritizing gratitude practice, individuals can foster happiness, strengthen interpersonal connections, and experience greater fulfillment in life."
      },
      {
        read:false,
        title: "Mindful Eating",
        para1: "Mindful eating involves paying attention to food choices, eating habits, and physical sensations during meals. Practicing mindful eating promotes healthy eating behaviors, improves digestion, and enhances satisfaction with meals. Mindful eating reduces emotional eating, supports weight management goals, and fosters a positive relationship with food.",
        para2: "Incorporating mindful eating practices involves savoring flavors, chewing slowly, and listening to hunger and fullness cues. Mindfulness techniques during meals increase awareness of nutritional needs and food preferences. Mindful eating reduces stress-related eating behaviors, enhances digestion, and supports overall well-being. By practicing mindful eating, individuals can cultivate healthy eating habits, improve nutritional intake, and promote mindful living."
      },
      {
        read:false,
        title: "Personal Development",
        para1: "Personal development involves pursuing activities and strategies that enhance self-awareness, skills, and potential. Engaging in personal growth goals promotes self-improvement, increases self-confidence, and fosters resilience. Personal development encompasses lifelong learning, setting goals, and embracing challenges to achieve personal and professional aspirations.",
        para2: "Incorporating personal development into daily routines involves self-reflection, seeking feedback, and exploring new experiences. Personal growth initiatives, such as skill-building workshops, career development plans, and wellness activities, support holistic well-being. Prioritizing personal development enhances adaptability, improves problem-solving abilities, and fosters a growth mindset. By investing in personal growth, individuals can maximize potential, achieve personal goals, and lead fulfilling lives."
      },
      {
        read:false,
        title: "Holistic Wellness",
        para1: "Holistic wellness emphasizes integrating physical, mental, emotional, and spiritual aspects of health to achieve overall well-being. Adopting a holistic approach to wellness promotes balance, resilience, and vitality. Holistic practices include mindfulness, nutrition, physical activity, and self-care strategies that support optimal health across all dimensions.",
        para2: "Incorporating holistic wellness practices involves nurturing relationships, connecting with nature, and practicing self-reflection. Holistic therapies, such as acupuncture, massage therapy, and energy healing, complement conventional medical treatments and promote healing. Prioritizing holistic wellness supports preventive care, enhances quality of life, and fosters a sense of purpose. By embracing holistic principles, individuals can cultivate resilience, achieve balance, and sustain lifelong well-being."
      },
      {
        read:false,
        title: "Social Support",
        para1: "Social support involves seeking and receiving assistance, empathy, and companionship from others during challenging times. Building strong social connections enhances mental health, reduces stress levels, and promotes emotional well-being. Social support networks provide encouragement, validation, and a sense of belonging, which improve overall life satisfaction.",
        para2: "Incorporating social support into daily life involves nurturing relationships, participating in group activities, and seeking guidance from trusted individuals. Peer support groups, community networks, and close friendships provide emotional support and practical assistance during difficult situations. Prioritizing social connections strengthens resilience, improves coping skills, and enhances psychological health. By cultivating social support networks, individuals can navigate life's challenges, reduce loneliness, and achieve greater well-being."
      },
      {
        read:false,
        title: "Self-Compassion",
        para1: "Self-compassion involves treating oneself with kindness, understanding, and acceptance during times of struggle or failure. Cultivating self-compassion enhances emotional resilience, reduces self-criticism, and promotes mental well-being. Self-compassionate individuals acknowledge their imperfections with compassion and respond to challenges with self-care and self-kindness.",
        para2: "Incorporating self-compassion practices involves practicing mindfulness, self-reflection, and self-soothing techniques. Self-compassion exercises, such as writing compassionate letters to oneself or practicing self-forgiveness, promote emotional healing and inner peace. Embracing self-compassion fosters resilience, improves self-esteem, and enhances overall quality of life. By prioritizing self-compassion, individuals can cultivate a positive self-image, navigate difficulties with resilience, and experience greater emotional well-being."
      },
      {
        read:false,
        title: "Goal Setting",
        para1: "Goal setting involves establishing clear objectives and creating actionable steps to achieve personal, academic, or professional aspirations. Setting goals promotes motivation, increases focus, and enhances productivity. Goal-directed behaviors support personal growth, improve time management skills, and foster a sense of accomplishment and fulfillment.",
        para2: "Incorporating goal setting into daily routines involves defining SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals and developing strategies to track progress. Setting short-term and long-term goals motivates individuals to overcome obstacles, adapt to changes, and pursue continuous improvement. Achieving goals enhances self-confidence, builds resilience, and promotes well-being. By setting meaningful goals, individuals can clarify priorities, maximize potential, and lead purposeful lives."
      }

    
  ];

  
  export const ReadAbout = () => {
      const { isOpen, onOpen, onClose } = useDisclosure();
      const [data, setData] = useState();
      const [state, setState] = useState(mentalHealthFitnessTopics);
  
      function handleClick(item) {
          const updatedItem = { ...item, read: true };
          const updatedState = state.map(topic => topic.title === item.title ? updatedItem : topic);
          setState(updatedState);
          setData(updatedItem);
          localStorage.setItem('topic', JSON.stringify(updatedState));
          onOpen();
      }
  
      return (
          <div style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              width: "100%",
              marginTop: "30px",
              padding: "20px",
              borderRadius: "30px",
              display: "flex",
              flexWrap: "wrap",
              backgroundColor: "#F4F4F4"
          }}>
              {state.map(item => (
                  <div
                      key={item.title}
                      style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "15px",
                          boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                          margin: "5px 15px",
                          padding: "3px 7px",
                          borderRadius: "5px",
                          backgroundColor: "#FFFFFF"
                      }}
                      onClick={() => handleClick(item)}
                  >
                      <p>{item.title}</p>
                      {item.read ? (
                          <img style={{ height: "21px" }} src={checked} alt="checked" />
                      ) : (
                          <img style={{ height: "17px" }} src={select} alt="select" />
                      )}
                  </div>
              ))}
  
              <Modal onClose={onClose} size='3xl' isOpen={isOpen}>
                  <ModalOverlay style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
                  <ModalContent>
                      <ModalHeader>{data?.title}</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                          <div className="modalCont">
                              <p>{data?.para1}</p>
                              <p>{data?.para2}</p>
                          </div>
                      </ModalBody>
                      <ModalFooter>
                          <Button onClick={onClose}>Close</Button>
                      </ModalFooter>
                  </ModalContent>
              </Modal>
          </div>
      );
  };
  


