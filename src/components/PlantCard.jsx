import React from 'react';
import { Link } from 'react-router';
import { FaStar } from 'react-icons/fa';

const PlantCard = ({ plant }) => {
    const { plantId, plantName, image, price, rating, category } = plant;

    return (
        <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-green-50">
            <figure className="h-56 overflow-hidden">
                <img 
                    src={image} 
                    alt={plantName} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
            </figure>
            <div className="card-body p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">{category}</span>
                        <h2 className="card-title text-xl text-gray-800 mt-1">{plantName}</h2>
                    </div>
                    <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                        <FaStar className="text-yellow-400 text-sm" />
                        <span className="text-sm font-bold text-green-800">{rating}</span>
                    </div>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                    <span className="text-2xl font-bold text-green-700">${price}</span>
                    <Link 
                        to={`/plant/${plantId}`} 
                        className="btn btn-sm bg-green-600 hover:bg-green-700 text-white border-0 px-4 rounded-full normal-case"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;
