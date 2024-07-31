import { useState, useEffect } from 'react';

const useSearch = (items) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (searchQuery) {
      const filtered = items.filter(item =>
        item && item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [searchQuery, items]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return { searchQuery, filteredItems, handleSearch };
};

export default useSearch;
