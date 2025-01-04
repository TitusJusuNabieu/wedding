import React, { useState } from 'react';
import { Menu, Calendar, Clock, MapPin, Utensils, Heart } from 'lucide-react';
const weddingData = {
  basicInfo: {
    couple: "Abby & Med",
    date: "10th January 2025",
    location: "Ocean View Resort Sussex",
    time: "4:30 PM",
    coupleImage: "bg.jpeg" // Placeholder image
  },
  couple: {
    bride: {
      name: "Abby",
      description: "Loving, beautiful bride with a heart of gold"
    },
    groom: {
      name: "Med",
      description: "Charming groom, full of love and passion"
    }
  },
  agenda :[
  { time: "5:00 PM", event: "Guest Arrival", details: "Welcome cocktails & light hors d'oeuvres, guest book signing, photo booth, photo session" },
  { time: "5:50 PM", event: "Guests Seated", details: "Guests advised not to interrupt the photographer's angles" },
  {
    time: "6:00 PM",
    event: "Grand Entrance",
    details: `Order:
    1. Parents of the groom
    2. Parent of the bride
    3. Families of the bride
    4. Friends of the bride
    5. Godparents of Groom (David Moinina Sengeh & Katherine Anne Krontiris, Juldeh Jalloh & Isa Jalloh)
    6. Godparents of Bride (Amidu Barrie & Tigidankay Barrie)
    7. Best-men and Bridesmaids
    8. Bride and groom`
  },
  { time: "6:40 PM", event: "Opening Prayer", details: "Volunteer Imam" },
  { time: "6:45 PM", event: "MCs Welcome Remarks", details: "" },
  { time: "6:50 PM", event: "Couple's First Dance", details: "With special guests" },
  {
    time: "7:00 PM",
    event: "Toasts",
    details: `Toast to Bride & Groom - Proposed by Mrs Isatu Baldeh, Response by Alfred Cole
    Toast to Bride's Family - Proposed by Mrs Tigidankay Barrie, Response by Abby Dad family member
    Toast to Groom's Family - Proposed by Mohamed F. Lamin, Response by Dr. Edward Magbity
    Toast to Guests - Proposed by Mrs Abigail Kromanty, Response by Mrs Barry (Abi's mom)`
  },
  {
    time: "7:20 PM",
    event: "Dinner Service",
    details: `Menu:
    Appetizers: Rice Bread, Banana Bread, Rich Cake, Chin Chin
    Seafood: Baracuda fish dressed with Salad, Shrimps
    Drinks: Ginger Beer, Bissab, Orange juice, Pineapple juice, Apple juice, Pure Heaven Non Alcohol, 
    Fanta, Coke, Sprite, Vimto, Malt
    
    Background music and lovely ambience`
  },
  {
    time: "8:10 PM",
    event: "Speeches",
    details: "For the Bride - Stephine Musu Momoh\nFor the Groom - Sulaiman Burria"
  },
  { time: "8:20 PM", event: "Godparent Speech", details: "By David Moinina Sengeh" },
  { time: "8:30 PM", event: "Cake Blessing", details: "Prayer on the cake by Volunteer Imam" },
  { time: "8:35 PM", event: "Cake Cutting", details: "By bride and groom" },
  { time: "8:45 PM", event: "Couple's Second Dress", details: "With live band" },
  { time: "9:00 PM", event: "Second Entrance", details: "By best men, bridesmaids, bride and groom with DJ" },
  { time: "9:40 PM", event: "Special Entertainment", details: "Guest Artist performance" },
  { time: "10:00 PM", event: "Gift Presentation", details: "To the couple" },
  { time: "10:30 PM", event: "Couple Dances", details: "Bride with Dad, Groom with Mom (DJ)" },
  { time: "10:35 PM", event: "Vote of Thanks", details: "By Mrs. Abibatu Lamin" },
  { time: "10:40 PM", event: "Couple's Final Dress", details: "With live band" },
  { time: "11:00 PM", event: "Couple's Third Entrance", details: "With DJ" },
  { time: "11:00 PM", event: "Party", details: "Dance party with DJ Rampage" }
],
  menu: {
    appetizers: ["Rice Bread", "Banana Bread", "Rich Cake","Chin Chin"],
     drinks:["Ginger Beer","Bissab","Orange juice","Pineapple juice", "Apple juice", "Pure Heaven Non Alcohol", "Fanta",
"Coke", "Sprite", "Vimto", "Malt"],
    mainDishes: {
      riceDishes: ["Jollof Rice", "Egg and Vegetable Fried Rice", "Buttered Rice"],
      chicken: ["Grilled Chicken", "Fried Chicken"],
      beef: ["Swedish Beef Meatballs", "Roasted Beef in Hot Pepper Sauce"],
      seafood: ["Honey Garlic Shrimps", "Butter Garlic Shrimps","Barracuda fish dressed with Salad"]
    },
    desserts: ["Wedding Cake", "Ice Cream/Yogurt", "Fruit Salad"]
  }
};

const WeddingReceptionApp = () => {
  const [activeSection, setActiveSection] = useState('couple');

  const NavButton = ({ label, icon: Icon, section }) => (
    <div
      onClick={() => setActiveSection(section)}
      className={`
        flex flex-col items-center justify-center 
        w-full p-3 
        rounded-lg 
        cursor-pointer 
        transition-all 
        hover:bg-sky-100
        ${activeSection === section 
          ? 'bg-sky-500 text-white' 
          : 'bg-white text-sky-700 border border-sky-200'
        }
      `}
    >
      <Icon size={24} className="mb-1" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );

  const renderCoupleSection = () => (
    <div className="p-6 bg-white rounded-lg shadow-md border-2 border-sky-200">
      <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">
        {weddingData.basicInfo.couple}
      </h2>

      {/* Couple's Image */}
      <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
        <img
          src={weddingData.basicInfo.coupleImage}
          alt={`${weddingData.basicInfo.couple}`}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Couple Details */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-pink-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-sky-700 mb-2">
            {weddingData.couple.bride.name}
            <span className="ml-2 text-pink-500">(Bride)</span>
          </h3>
          <p className="text-sky-900">{weddingData.couple.bride.description}</p>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-sky-700 mb-2">
            {weddingData.couple.groom.name}
            <span className="ml-2 text-sky-500">(Groom)</span>
          </h3>
          <p className="text-sky-900">{weddingData.couple.groom.description}</p>
        </div>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="p-6 bg-white rounded-lg shadow-md border-2 border-sky-200">
      <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">
        {weddingData.basicInfo.couple}'s Wedding Reception
      </h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 bg-pink-50 p-3 rounded-lg">
          <Calendar className="text-sky-500 w-10 h-10" />
          <div>
            <p className="font-semibold text-sky-700">Date</p>
            <p className="text-sky-900">{weddingData.basicInfo.date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-pink-50 p-3 rounded-lg">
          <Clock className="text-sky-500 w-10 h-10" />
          <div>
            <p className="font-semibold text-sky-700">Time</p>
            <p className="text-sky-900">{weddingData.basicInfo.time}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-pink-50 p-3 rounded-lg">
          <MapPin className="text-sky-500 w-10 h-10" />
          <div>
            <p className="font-semibold text-sky-700">Location</p>
            <p className="text-sky-900">{weddingData.basicInfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAgenda = () => (
    <div className="p-6 bg-white rounded-lg shadow-md border-2 border-sky-200">
      <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">Wedding Day Schedule</h2>
      <div className="space-y-3">
        {weddingData.agenda.map((item, index) => (
          <div
            key={index}
            className="bg-pink-50 p-4 rounded-lg border border-sky-100"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-sky-700 text-lg">{item.time}</span>
              <span className="font-semibold text-sky-900">{item.event}</span>
            </div>
            {item.details && (
              <p className="text-sky-600 text-sm italic">{item.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderMenu = () => (
    <div className="p-6 bg-white rounded-lg shadow-md border-2 border-sky-200">
      <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">Wedding Reception Menu</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-sky-700 mb-3">Appetizers</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {weddingData.menu.appetizers.map((item, index) => (
                <div
                    key={index}
                    className="bg-pink-50 p-2 rounded text-sky-900"
                >
                  {item}
                </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sky-700 mb-3">Main Dishes</h3>
          {Object.entries(weddingData.menu.mainDishes).map(([category, items]) => (
              <div key={category} className="mb-3">
                <h4 className="font-medium text-sky-600 capitalize mb-2">{category}</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {items.map((item, index) => (
                      <div
                          key={index}
                          className="bg-pink-50 p-2 rounded text-sky-900"
                      >
                        {item}
                      </div>
                  ))}
                </div>
              </div>
          ))}
        </div>


        <div>
          <h3 className="font-semibold text-sky-700 mb-3">Drinks</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {weddingData.menu.drinks.map((item, index) => (
                <div
                    key={index}
                    className="bg-pink-50 p-2 rounded text-sky-900"
                >
                  {item}
                </div>
            ))}
          </div>
        </div>


        <div>
          <h3 className="font-semibold text-sky-700 mb-3">Desserts</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {weddingData.menu.desserts.map((item, index) => (
                <div
                    key={index}
                    className="bg-pink-50 p-2 rounded text-sky-900"
                >
                  {item}
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
      <div className="min-h-screen bg-pink-50 p-4 flex flex-col">
        <div className="max-w-4xl mx-auto w-full flex-grow">
          {/* Large, easy-to-understand navigation */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <NavButton
                label="Couple"
                icon={Heart}
                section="couple"
            />
            <NavButton
                label="Event Details"
                icon={Menu}
                section="overview"
            />
            <NavButton
                label="Day Schedule"
                icon={Clock}
                section="agenda"
            />
            <NavButton
                label="Food Menu"
                icon={Utensils}
            section="menu"
          />
        </div>

        {/* Content Sections */}
        {activeSection === 'couple' && renderCoupleSection()}
        {activeSection === 'overview' && renderOverview()}
        {activeSection === 'agenda' && renderAgenda()}
        {activeSection === 'menu' && renderMenu()}
      </div>
    </div>
  );
};

export default WeddingReceptionApp;