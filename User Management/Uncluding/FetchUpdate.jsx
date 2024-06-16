const FetchtUpdate = async (url, full_name, country) => {
    try {
      const response = await fetch(url, {
        method: 'PUT', // or 'PATCH'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Full_Name: full_name,
          Country: country,
        }),
      });
  
      if (response.ok) {
        return true;
      } else {
        console.error('Failed to update user');
        return false;
      }
    } catch (error) {
      console.error('Error updating user:', error);
      return false;
    }
  };
  
  export default FetchtUpdate;
  