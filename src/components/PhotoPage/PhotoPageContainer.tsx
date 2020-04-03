import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './PhotoPage.scss';
import { imagePageSelector } from '../../redux/selectors/images-selectors';
import { addToFavorites } from '../../redux/actions/fetchImages';
import PhotoPage from './PhotoPage';

const PhotoPageContainer = ({ image, updateFavorites }: any) => {
  const [tags, setTags] = useState([]);
  const fetchImageInfo = async (url: any) => {
    const req = await fetch(url);
    const data = await req.json();
    console.log(data);

    const tagsArr = data.tags.filter((tag: any) => tag.type === 'landing_page');
    setTags(tagsArr);
  };

  const toTitleCase = (str: any) => {
    return str.toLowerCase().replace(/(?:^|[\s-/])\w/g, (match: string) => {
      return match.toUpperCase();
    });
  };

  useEffect(() => {
    const url = `https://api.unsplash.com/photos/${image.id}/?client_id=i_zzFN2ObiV515beVlFT2zSqgPNUnS2nL9UZD9SqHj4`;
    fetchImageInfo(url);
  }, [image.id]);

  return (
    <PhotoPage
      updateFavorites={updateFavorites}
      image={image}
      toTitleCase={toTitleCase}
      tags={tags}
    />
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  image: imagePageSelector(ownProps.match.params.photoId)(state),
});

const mapDispatchToProps = {
  updateFavorites: addToFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPageContainer);
