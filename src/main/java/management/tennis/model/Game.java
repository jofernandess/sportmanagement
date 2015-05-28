/*
 * JBoss, Home of Professional Open Source
 * Copyright 2013, Red Hat, Inc. and/or its affiliates, and individual
 * contributors by the @authors tag. See the copyright.txt in the
 * distribution for a full listing of individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package management.tennis.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name = "game")
public class Game implements Serializable {
	/** Default value included to remove warning. Remove or modify at will. **/
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private int id;

	@NotNull
	private String player1;

	@NotNull
	private String player2;

	@NotNull
	private int score1;

	@NotNull
	private int score2;

	private int point1;

	private int point2;

	public int getId() {
		return id;
	}

	public void setId(int id) {

		this.id = id;
	}

	/**
	 * @return the player1
	 */
	public String getPlayer1() {
		return player1;
	}

	/**
	 * @param player1
	 *            the player1 to set
	 */
	public void setPlayer1(String player1) {
		this.player1 = player1;
	}

	/**
	 * @return the player2
	 */
	public String getPlayer2() {
		return player2;
	}

	/**
	 * @param player2
	 *            the player2 to set
	 */
	public void setPlayer2(String player2) {
		this.player2 = player2;
	}

	/**
	 * @return the score1
	 */
	public int getScore1() {
		return score1;
	}

	/**
	 * @param score1
	 *            the score1 to set
	 */
	public void setScore1(int score1) {
		this.score1 = score1;
	}

	/**
	 * @return the score2
	 */
	public int getScore2() {
		return score2;
	}

	/**
	 * @param score2
	 *            the score2 to set
	 */
	public void setScore2(int score2) {
		this.score2 = score2;
	}

	/**
	 * @return the point1
	 */
	public int getPoint1() {
		return point1;
	}

	/**
	 * @param point1
	 *            the point1 to set
	 */
	public void setPoint1(int point1) {
		this.point1 = point1;
	}

	/**
	 * @return the point2
	 */
	public int getPoint2() {
		return point2;
	}

	/**
	 * @param point2
	 *            the point2 to set
	 */
	public void setPoint2(int point2) {
		this.point2 = point2;
	}

}
