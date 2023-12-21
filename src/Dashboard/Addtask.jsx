import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/UseAuth';
import useAxios from '../Hooks/UseAxios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddTask = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const axiosPublic = useAxios();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    console.log(imageFile);

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  };

  return (
    <div>
      <div className="bg-transparent">
        <div className="grid justify-center items-center">
          <div>
            <h2 className="text-2xl font-bold text-center m-4 text-#635147">
              Add New Task
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="mb-4 sm:mb-0">
              <label className="block text-sm font-medium text-#635147">
                Properties image
              </label>
              <input
                type="file"
                name="image"
                {...register('image', { required: true })}
                className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
              />
            </div>
            <div className="mb-4 sm:mb-0">
              <label className="block text-sm font-medium text-#635147">
                Task title
              </label>
              <input
                type="text"
                name="title"
                {...register('title', { required: true })}
                className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
              />
            </div>
            <div className="mb-4 sm:mb-0">
              <label className="block text-sm font-medium text-#635147">
                Task details
              </label>
              <textarea
                {...register('description', { required: true })}
                className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
                name="description"
              ></textarea>
            </div>
            <div className="mb-4 sm:mb-0">
              <label className="block text-sm font-medium text-#635147">
                Creator
              </label>
              <input
                type="text"
                name="Creatonname"
                value={user?.displayName}
                readOnly
                className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
              />
            </div>
            <div className="mb-4 sm:mb-0">
              <label className="block text-sm font-medium text-#635147">
                creator email
              </label>
              <input
                type="email"
                name="agentEmail"
                value={user?.email}
                readOnly
                className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
              />
            </div>
         
            <div className="mb-4 sm:mb-0">
              <label className="block text-sm font-medium text-#635147">
                creation date
              </label>
              <DatePicker
                name="createdate"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
              />
            </div>
            <div className="mb-4 sm:mb-0">
              <label className="block text-sm font-medium text-#635147">
                end Date
              </label>
              <DatePicker
                name="endDate"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
              />
            </div>
            <div className="mb-4 sm:mb-0">
              <label className="block text-sm font-medium text-#635147">
                Task Type
              </label>
              <select
                {...register('taskType', { required: true })}
                className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
              >
                <option value="" disabled selected>
                  Select Task Type
                </option>
                <option value="hard">Hard</option>
                <option value="medium">Medium</option>
                <option value="easy">Easy</option>
              </select>
            </div>
            <div className="col-span-2  p-4 flex justify-center">
              <button
                type="submit"
                className="btn btn-wide bg-[#9F8170] font-bold text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
