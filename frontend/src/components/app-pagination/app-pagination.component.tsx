import { PaginationItem } from '@material-ui/lab';
import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Link, useRouteMatch } from 'react-router-dom';

interface IPaginationProps {
  count: number;
  page: number;
  classes: Record<string, string>;
  onChange: ({ page }: { page: number }) => void;
}

const AppPagination = ({
  page,
  count,
  classes,
}: IPaginationProps): React.ReactElement => {
  const { url } = useRouteMatch();

  return (
    <Pagination
      shape="rounded"
      color="primary"
      classes={classes}
      page={page}
      count={count}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`${url}?page=${item.page}`}
          {...item}
        />
      )}
    />
  );
};

export default AppPagination;
