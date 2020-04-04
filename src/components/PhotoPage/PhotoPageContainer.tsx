import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './PhotoPage.scss';
import { imagePageSelector } from '../../redux/selectors/images-selectors';
import { addToFavorites } from '../../redux/actions/fetchImages';
import PhotoPage from './PhotoPage';
import { getTags } from '../../redux/actions/tags';
import tagsSelector from '../../redux/selectors/tags-selectors';

const PhotoPageContainer = ({
  image,
  updateFavorites,
  tags,
  updateTags,
}: any) => {
  const toTitleCase = (str: any) => {
    return str.toLowerCase().replace(/(?:^|[\s-/])\w/g, (match: string) => {
      return match.toUpperCase();
    });
  };
  useEffect(() => {
    updateTags(image.id);
  }, [image.id, updateTags]);

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
  tags: tagsSelector(state),
});

const mapDispatchToProps = {
  updateFavorites: addToFavorites,
  updateTags: getTags,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPageContainer);
