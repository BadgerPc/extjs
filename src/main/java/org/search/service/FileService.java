package org.search.service;

import org.search.model.FileItem;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Ratheesh Nair
 * Date: 7/15/14
 * Time: 3:08 PM
 * To change this template use File | Settings | File Templates.
 */
public interface FileService {

    /**
     * returns a list of FileItem under the specified location matching
     * the searcValue
     *
     * @param searchValue
     * @param location
     * @return
     */
    public List<FileItem> loadFiles(String searchValue, String location);
}
