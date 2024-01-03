import { useState, useEffect } from 'react';
import axios from 'axios';

interface Task {
  title: string;
  createdAt: string;
  scheduledPracticeDates: string[];
}

interface ErrorResponse {
  response: {
    data: {
      error: string;
    };
  };
}

interface TaskWithDates {
  [title: string]: string[];
}

const useGetTasks = () => {
  const [tasksWithDates, setTasksWithDates] = useState<TaskWithDates>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true); // Set loading to true before making the API call

        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
          setError('Access token not found. Please log in.');
          return;
        }

        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/allTasks`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          const tasksData = response.data.tasks as Task[];
          const updatedTasksWithDates: TaskWithDates = {};

          tasksData.forEach(task => {
            updatedTasksWithDates[task.title] = task.scheduledPracticeDates;
          });

          setTasksWithDates(updatedTasksWithDates);
        } else {
          setError(response.data.error);
        }
      } catch (error) {
        console.error('Error occurred during task retrieval:', error);

        if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.error) {
          const axiosError = error as ErrorResponse;
          setError(axiosError.response.data.error);
        } else {
          setError('Error occurred. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [setTasksWithDates, setError]);

  return { tasksWithDates, error, loading };
};

export default useGetTasks;
